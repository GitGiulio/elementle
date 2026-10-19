# Offline Elementle practice: investigation and proposed design

Status: implemented after user approval. See [verification results](../../verification.md) for exercised checks and environment limits.
Investigated: 19 October 2026. The workspace was empty at investigation time.

## Purpose and success criteria

Create a personal browser game for practising the real Elementle without an internet connection, plus an Element Recall mode that presents an element's characteristics and asks for its name and symbol. Infinite means unlimited successive rounds. Classic practice preserves the official eight-guess limit and feedback; the proposed recall mode also uses eight attempts per round.

Assumptions: English interface, desktop browser first with a usable mobile layout, and all 118 elements. Visual direction is explicitly requested: take inspiration from [gitgiulio.github.io](https://gitgiulio.github.io/), replacing its orange accents with green. This is a local practice app; daily scheduling and online account features are outside the requested purpose.

Success means extracting a local folder, opening `index.html`, and playing multiple complete rounds with the computer disconnected. No account, installation, build, or running server is required to play. Persistent progress is supported when browser storage permits it; storage failure must never prevent play.

## Investigation and evidence

### Public rules and interface

The [official instructions](https://elementlegame.com/how-to-play) describe eight attempts, an atomic-number direction clue, symbol-letter colours, matching-family feedback, and a hint. The [element reference](https://elementlegame.com/elements) lists all 118 elements and ten families.

I inspected the [live game](https://elementlegame.com/) and its [Freeplay route](https://elementlegame.com/?mode=freeplay) in the browser. The interface has a charcoal background, green highlights, hexagonal navigation icons, autocomplete input, Guess and Hint controls, and eight numbered element-card slots. A submitted Iron guess produced a card containing its atomic number, an upward arrow, its symbol, name, and family. Autocomplete selection fills the input before submission.

Freeplay initially rendered the game, then displayed a Lab subscription gate. Consequently, the full Freeplay lifecycle was not verified through an authenticated session. No subscription was acquired or access restriction bypassed. The source findings below are distinguished from the live observations.

### Author-linked public source

The website footer links to [haokai-xuan/elementle](https://github.com/haokai-xuan/elementle), whose README points back to the official website. I inspected public source at commit [`b20ed99368360c24aea82971dd1efcf5a74c6af6`](https://github.com/haokai-xuan/elementle/tree/b20ed99368360c24aea82971dd1efcf5a74c6af6). This pins the findings even if the website changes.

| Source | Confirmed behaviour |
| --- | --- |
| [Game controller](https://github.com/haokai-xuan/elementle/blob/b20ed99368360c24aea82971dd1efcf5a74c6af6/scripts/elementle.js) | Eight guesses; case-insensitive symbol comparison; duplicate rejection; win/loss reveal; next-round control; random choice excluding the previous answer; locally saved Freeplay state. |
| [Element records](https://github.com/haokai-xuan/elementle/blob/b20ed99368360c24aea82971dd1efcf5a74c6af6/data/elements.js) | 118 records with English name, number, symbol, family, and three hints each. |
| [Input matching](https://github.com/haokai-xuan/elementle/blob/b20ed99368360c24aea82971dd1efcf5a74c6af6/scripts/i18n.js) | Names and symbols are accepted; Aluminium and Caesium are accepted English alternatives. Suggestions use name/symbol prefixes and alphabetical ordering. |
| [Styles](https://github.com/haokai-xuan/elementle/blob/b20ed99368360c24aea82971dd1efcf5a74c6af6/styles/elementle.css) | Four card columns on wider screens; two at widths up to 1200px; remote Google fonts. |
| [Practice bootstrap](https://github.com/haokai-xuan/elementle/blob/b20ed99368360c24aea82971dd1efcf5a74c6af6/scripts/practice-bootstrap.js) | Practice has authentication and API integration in the official application. |
| [Freeplay regression check](https://github.com/haokai-xuan/elementle/blob/b20ed99368360c24aea82971dd1efcf5a74c6af6/scripts/test-freeplay-draft.js) | The public implementation explicitly checks local load/save/reload/advance behaviour. |

The current official application has an Express server, account integration, and external resources. Downloading its landing page alone would therefore not establish an independent offline game. Use original local application code and locally authored hint prose, with the observed rules and factual classifications as the compatibility reference.

### Rules to preserve

1. Choose uniformly from atomic numbers 1–118 for the first round. Subsequently choose uniformly from the other 117 elements, excluding only the previous answer.
2. Allow at most eight distinct valid guesses. Empty, unknown, and repeated input consumes no attempt. Stop accepting guesses after a win or eighth unsuccessful guess.
3. Show the guessed element's number. An up arrow means the answer has a higher number; down means lower. A correct answer gets a success indication.
4. Compare symbol letters case-insensitively. A letter at the same position is green; otherwise a letter anywhere in the answer symbol is yellow; otherwise it retains the neutral colour. The full element name is not scored.
5. Highlight the family only when its family string equals the answer's family.
6. End a round immediately on the correct element. Reveal the answer after a loss and provide the next-round button after either result.
7. Preserve the round on reload when storage is available. A new round resets guesses and hint state.

Examples: guessing `Ca` against `Ac` gives two yellow letters; `Fe` against `F` gives green then neutral; `He` against `Ne` gives neutral then green. These cases prevent accidental full-name scoring or case-sensitive matching.

### Compatibility family mapping

Use these exact family labels and membership from the inspected official records. In particular, Polonium is `Metal`, and Lutetium and Lawrencium stay in their respective lower-row families. Do not substitute a different dataset's classification scheme.

| Family | Atomic numbers | Count |
| --- | --- | ---: |
| Nonmetal | 1, 6, 7, 8, 15, 16, 34 | 7 |
| Noble Gas | 2, 10, 18, 36, 54, 86, 118 | 7 |
| Alkali Metal | 3, 11, 19, 37, 55, 87 | 6 |
| Alkaline Earth Metal | 4, 12, 20, 38, 56, 88 | 6 |
| Metalloid | 5, 14, 32, 33, 51, 52 | 6 |
| Halogen | 9, 17, 35, 53, 85, 117 | 6 |
| Metal | 13, 31, 49, 50, 81, 82, 83, 84, 113, 114, 115, 116 | 12 |
| Transition Metal | 21–30, 39–48, 72–80, 104–112 | 38 |
| Lanthanide | 57–71 | 15 |
| Actinide | 89–103 | 15 |

## Approaches considered

| Approach | Advantages | Costs | Decision |
| --- | --- | --- | --- |
| Static HTML/CSS/JavaScript folder | Opens directly; no runtime dependencies or network; small amount of code | Saving from `file:` depends on browser behaviour | Recommended |
| Local HTTP server serving the same static files | Stable origin for storage; familiar development workflow | A server must run while playing | Optional fallback |
| Adapt the full official application | Existing presentation and data structures | Account/API dependencies and unrelated online functionality | Disproportionate for personal offline practice |

## Proposed application

### Packaging and boundaries

- Plain HTML, CSS, and classic deferred JavaScript scripts with relative paths. Avoid ES-module imports and fetched JSON so direct `file:` loading works.
- Bundle the element data as a JavaScript array. Use system fonts and original CSS/inline SVG decorations; no remote fonts, CDN icons, telemetry, ads, or API calls.
- A pure game file owns answer selection, lookup, feedback, and round transitions. A small storage file owns validated saves. The UI file owns DOM events and rendering.
- A separate recall rules file handles free-text answers and full Wordle scoring. Keep classic symbol feedback unchanged; recall must account for repeated letters in full names.
- Browser files expose one named API each. Data, game, and storage files may additionally export those same APIs through guarded CommonJS exports for Node's built-in tests. No bundler or package install is needed.
- A local name such as “Elementle Practice — Offline” makes the purpose clear.

### Visual direction: GitGiulio reference with green accents

Use [gitgiulio.github.io](https://gitgiulio.github.io/) as the styling reference for the entire application: both modes, mode navigation, inputs, property cards, guess histories, dialogs, help, and result states. Elementle remains the reference for classic game rules; the user's portfolio reference sets the visual direction. This styling requirement supersedes any implication that the official game's pixel lettering, hexagonal navigation, or decorative laboratory background should be reproduced.

I inspected the reference in the browser on 19 October 2026. Observed features include a near-black background, warm off-white text, restrained orange highlights, thin section rules, a compact horizontal header, a desktop side column, generous whitespace, bold tightly spaced headings, small uppercase monospace labels, and compact buttons with modest corner rounding. Computed styles confirm background `#101114`, main text `#f3f0e9`, Segoe UI/system sans-serif typography, and a primary orange button `#ff963f` with a 4px radius. The following green palette is the proposed adaptation, not a set of colours taken from the reference.

| Role | Proposed colour | Application |
| --- | --- | --- |
| Page background | `#101114` | Main application canvas |
| Raised surface | `#17191d` | Inputs, property cards, dialogs, quiet panels |
| Primary text | `#f3f0e9` | Headings and readable body text |
| Muted text | `#a6a6ad` | Secondary descriptions and metadata |
| Divider | `#282a2f` | Quiet section rules and panel edges |
| Green accent | `#86c98a` | Primary buttons, active mode underline, links, small highlights |
| Green hover | `#a2dfaa` | Interactive hover treatment |
| Accent-button text | `#101114` | Dark text on filled green buttons |

Define these as CSS custom properties in `styles.css` and use them consistently. Replace the reference's orange branding, active-navigation marks, highlighted labels, and primary controls with the green accent. Keep yellow for misplaced-letter clues and neutral grey for absent letters; those are game meanings, not decorative orange accents. Give correctness, misplaced, and absent states their own semantic colour variables and text descriptions. Distinguish a green action button from a solved result through shape, location, and explicit labels as well as colour. Check final colour combinations for readable contrast and visible focus; thin decorative dividers must not be the only indication of an input boundary or selected state.

Use the local font stack `"Segoe UI", system-ui, sans-serif` for UI and headings, with `ui-monospace, Consolas, monospace` for small uppercase labels, counters, and compact scientific metadata. Headings should be bold with slightly negative letter spacing, approximately 48–56px on wide screens and 30–36px on phones; body text is at least 16px with comfortable line spacing. Use a restrained spacing scale (8, 16, 24, 32, 48px), thin separators, mostly flat surfaces, and roughly 4px button corners. Do not introduce pixel fonts, large glows, background particles, a cursor trail, or heavy glass effects.

Adapt the reference's layout to gameplay: a compact top header contains the game identity, the two mode options, and relevant help/reference actions. A desktop side column holds the round summary in Classic and the characteristics in Recall, while the main column holds inputs and guesses. Use fluid card widths within that column. At 900px and below, stack the summary/property card above the play area and allow header actions to wrap; preserve the existing four/two-column classic card breakpoint. Keep the main game controls immediately reachable rather than placing a portfolio-sized introduction above them. Long recall rows scroll inside their histories. Do not copy the reference's portrait, biography, language menu, or contact actions into the game.

All styling works from local files with system fonts and original CSS/inline icons. The reference site is consulted during design and visual review only; playing the game must not fetch it or any of its resources. Review representative Classic, Recall, and end-of-round screens against the reference for typography, spacing, dividers, and restrained accents, with green consistently replacing orange.

### Classic practice experience

Apply the shared GitGiulio-inspired dark theme with green accents, large chemical symbols, and eight numbered cards. Use four columns above 1200px and two at or below 1200px, with fluid cards fitting the available main column and avoiding horizontal overflow at 320px. Disable animations under `prefers-reduced-motion`.

Input accepts trimmed, case-insensitive canonical English names or symbols, plus Aluminium and Caesium. Suggestions match name/symbol prefixes, sort alphabetically by canonical name, and support mouse, touch, Up/Down, Enter to select, and Escape to dismiss. Selecting a suggestion fills the input; Guess or a subsequent Enter submits it. Full valid input can also be submitted directly.

Each submitted card displays atomic number and direction, coloured symbol letters, name, and family. Use text/accessible descriptions alongside colours, visible keyboard focus, and a polite live region for feedback. Invalid and duplicate input gets a short explanation and retains keyboard focus.

On win/loss, show the answer and a “Next random element” button. Enable that button only at the end of a round, matching the official flow. There is no daily limit or timer.

### Hints and reference

Provide three independently written, brief factual hints for each element. Verify scientific claims against accessible authoritative element references during implementation; use simple stable chemistry facts and avoid reproducing the official hint wording. Store provenance in `data/SOURCES.md`.

Choose one hint index when a new round starts and persist it. Hint toggles that same hint and marks the round as assisted without consuming a guess. This deliberately differs from the official source's date-seeded hint-index selection. Hint wording and artwork will also differ; game scoring and family membership will match.

Include compact local help and a searchable periodic-table reference dialog. Use the standard 18-column arrangement, group/period headings, and two detached rows for elements 57–71 and 89–103. Each tile shows atomic number, symbol, and name, with family colours and a labelled legend. Family and atomic mass are available on hover and in accessible text. Search by name, symbol, number, or family highlights matching tiles in place, dims the others, reports a match count, and scrolls the first match into view. Keep all 118 positions intact, including when there are no matches. Contain horizontal/vertical scrolling inside the dialog on small screens. This replaces the original list reference at the user's request.

### Element Recall mode: characteristics to name and symbol

This is an additional training mode requested by the user, not an observed official game feature. Its purpose is active recall: recognise an element from its properties and practise both its English name and chemical symbol. The eight-attempt budget, property selection, and partial-answer locking below are proposed defaults.

#### Entering and starting a round

Provide a clearly labelled mode selector with `Classic practice` and `Element Recall`. Switching modes preserves each mode's current round, including partial progress. The first visit to either mode creates its round; returning resumes it. There is no timer, daily reset, or round limit.

Recall chooses uniformly from all 118 elements and excludes that mode's previous answer on the next round. Start with the property card, two empty answer inputs, an attempt counter of `0 / 8`, and empty name/symbol histories. Never prefill either answer. Offer name-only autocomplete on the name input; the symbol input stays manual.

#### The property card

Display the element in a familiar periodic-table tile: atomic number at the upper left, a large chemical symbol in the centre, the element name directly below the symbol, and standard atomic weight along the bottom. Use a masked symbol (`?`) and `Name hidden` until those respective fields have been solved; reveal only the earned field in its normal position, and reveal both at the end of the round. Keep the family immediately below the tile, with period, group, physical state, and the descriptive clue outside it. Preserve this familiar arrangement at mobile sizes. This presentation was explicitly requested during implementation.

Show these characteristics immediately, without requiring a wrong guess first:

| Characteristic | Presentation and data rule |
| --- | --- |
| Atomic number | Integer 1–118; this is a deliberate identification clue. |
| Element family | Exact compatibility family used by classic mode. |
| Period | Integer 1–7. |
| Group | Integer 1–18 where assigned by the chosen source, otherwise `Not assigned`; do not invent group numbers for the lower rows. |
| Atomic mass | A sourced display string with its meaning: standard atomic weight, representative-isotope mass number, or unavailable. Preserve brackets/qualifiers and distinguish these quantities. |
| Physical state | State at 20 °C and 1 atm when supported by the source. Label predicted values `Predicted`; use `Unknown` when unsupported. |
| Description | One independently written, stable property or use clue, without explicitly naming the target or writing its symbol/formula as an answer. |

The element's name and symbol are hidden in the card title, content, tooltip, accessible name, image description, and any generated labels. Use neutral headings such as `Identify this element`; avoid answer-bearing image filenames or links in this view. The local dataset remains inspectable, as expected for offline practice; this is a presentation rule, not an anti-cheating system.

Add these local data fields to each element: `period`, `group` (number or null), `atomicMass` (`{display, kind}` with kind `standard-weight`, `isotope-mass-number`, or `unknown`), `phase` (`{value, certainty}` with value `solid`, `liquid`, `gas`, or `unknown`, and certainty `measured`, `predicted`, or `unknown`), and `recallClue`. Cite factual sources and conventions in `data/SOURCES.md`. All 118 records must have the fields; unknown values are explicit rather than fabricated.

Also show `Name: N letters` and `Symbol: M letters` for the canonical targets. Guess rows may have different lengths, as described below. The description remains fixed for the round; wrong answers reveal letter feedback rather than swapping the property clues.

#### Inputs and submission

Use separately labelled `Element name` and `Chemical symbol` text inputs and one `Check answers` button. Up/Down and Enter select a highlighted name suggestion without submitting; a subsequent Enter or Check answers submits the pair. Turn off browser spelling suggestions, autocorrect, automatic capitalisation, and autocomplete where the browser permits, so this view practises recall.

Trim surrounding spaces and compare case-insensitively. Display names and symbols in their conventional casing after submission. Only existing element names and existing chemical symbols from the 118-element dataset are accepted. Validate the two fields independently: `Carbon` with `Fe` is a valid pair even though they identify different elements. A symbol in the name field, a full name in the symbol field, a misspelling, and an unassigned symbol are rejected. Show a message next to the invalid field, mark it accessibly invalid, preserve both inputs, and consume no attempt or letter feedback. The name field uses Classic-style prefix search, alphabetical ordering, mouse/touch selection, Up/Down, Enter to select, and Escape to dismiss. Suggestions contain names only and search by name prefixes only; symbols neither appear nor produce name matches. Selecting a name leaves the symbol draft untouched and clears any name validation error. Dismiss suggestions when focus leaves the name control, when switching modes, or when submitting. The symbol field has no suggestions. On narrow screens the dropdown participates in layout so it cannot cover Check answers. Dictionary validation supersedes the initial unrestricted alphabetic-entry rule; name autocomplete supersedes the later no-suggestions rule, both at the user's request.

Accept `Aluminium` as `Aluminum` and `Caesium` as `Cesium`, using the plan's existing aliases. Canonicalise those full-word aliases before scoring; show a brief note such as `Aluminium accepted as Aluminum` and display the canonicalised feedback row. Do not silently apply fuzzy matching or correct other misspellings. The announced name length is the canonical spelling's length. Additional aliases are outside this initial scope.

For each field that is still unsolved, require a nonempty existing name or symbol of the correct type. If either unsolved field is missing or invalid, identify the issue, preserve both inputs, and consume no attempt or feedback. After one field has been solved, only the remaining field needs input. Repeating an already submitted effective name/symbol pair consumes no attempt and gets a short duplicate notice; repeating one half with a changed other half is allowed.

Each accepted submission consumes exactly one of eight shared attempts, not one attempt per input. Evaluate the two fields independently against the same hidden element. A correct field gets an all-green result, a `Solved` label, and a locked value. Keep that field solved for the rest of the round; never fill or reveal the other field automatically. Subsequent history rows show a compact solved indication for the locked field instead of requiring it to be retyped.

#### Wordle feedback

For every accepted wrong answer, display a tile for each guessed letter in the corresponding name or symbol history:

- Green: correct letter at the correct position.
- Yellow: a letter in the answer at a different position, with an unused occurrence remaining.
- Grey: absent from the answer, or guessed more times than the answer contains it.

Use the standard two-pass algorithm independently for each field: mark exact positions and consume those answer occurrences first, then assign yellow from the remaining letter counts from left to right. A green match must never lose its letter to an earlier yellow. Case does not matter; a letter found in the element's name must not affect the symbol board, or vice versa.

Allow existing element names and symbols of different lengths from the target to receive feedback. Score only submitted letters: a trailing letter beyond the answer length can be yellow if a remaining answer occurrence exists, otherwise grey; unentered positions are blank, not grey evidence about a guessed letter. Preserve one tile per submitted letter. Green status requires an actual matching answer position. A field is solved only by full normalised equality, not merely because every letter of a shorter guess is green. Misspellings receive an input error instead of letter feedback.

Examples defining the algorithm: guessing `LLL` against `HELIUM` produces grey, grey, green, because there is only one L and the positional match consumes it first. Guessing `N` against symbol `Ne` gives one green tile but does not solve the symbol. Guessing `eN` against `Ne` gives two yellow tiles. `FE` solves `Fe`, and ` iron ` solves `Iron` after normalisation.

Below each history, show a separate A–Z letter-status strip aggregating that field's previous clues. Use strongest known status per letter (green over yellow over grey), never downgrade it, and do not share statuses between the two fields. This strip summarises observed letters; it does not expose letters that have never been guessed. It is not a second input keyboard.

Include accessible text for each tile's letter, position, and status, visible focus, and polite feedback such as `Name solved. Symbol has one correct letter and one misplaced letter.` Permit horizontal scrolling inside long guess histories at narrow widths, without making the whole page overflow. Keep the inputs reachable with the on-screen keyboard open.

#### Winning, losing, and review

Win when both name and symbol have been solved, including when the second is solved on attempt eight. If eight accepted submissions finish without both being solved, end the round as a loss. Preserve the partial success visibly. Disable further submissions and reveal both canonical answers, the property card, and the full guess histories after either outcome.

Provide `Next random element` after either outcome. It resets both histories and letter strips and excludes the previous recall answer. There is no automatic advance. Do not offer the classic Hint button in recall: its property card already supplies the intended clues. Hide the element-reference action during an active recall round; make it available for review once the round ends. Help remains available and explains the two-field rules without disclosing the current answer.

#### Example round flow

1. A hidden target's characteristics appear. The user submits a wrong name and wrong symbol; both histories receive coloured tiles and the counter becomes `1 / 8`.
2. A later submission gets the name right but the symbol wrong. The name locks as solved; symbol tiles provide feedback. The answer's correct symbol remains hidden.
3. The user enters only another symbol. If correct, the round ends as a win; otherwise its tiles are added and the name remains solved.
4. Reloading or switching away and back restores the same target, attempts, feedback, and locked name. A completed round remains completed.

### State and storage

Classic `Round` shape remains `{answer: number, guesses: number[], hintIndex: 0|1|2, hintUsed: boolean}`. Recall uses `RecallRound = {answer: number, attempts: {name: string, symbol: string}[]}`. Recall attempts store normalised strings, with aliases canonicalised; after a field locks, later attempts carry its correct normalised value forward. Derive solved fields, colours, letter strips, and `playing`/`won`/`lost` from the transcript. Do not store redundant solved flags or coloured tiles. A correct eighth submission wins in either mode.

Use `PracticeSession = {activeMode: 'classic'|'recall', classic: Round|null, recall: RecallRound|null}`. Save `{version: 1, session}` under `elementle-practice.v1` after each accepted submission, classic hint use, mode switch, and new round. A null round means the mode has not been visited; create it on first entry. This revises an unimplemented proposed schema, so there is no shipped save format to migrate.

Validate classic values as before: valid element numbers, at most eight unique guesses, no guesses after an earlier correct answer, valid hint index, and boolean hint flag. Validate recall history by replaying at most eight attempts: legal normalised input lengths/characters, canonical aliases, no duplicate effective pairs, no changes to already solved fields, and no attempts after both fields were solved. Preserve alphabetic history accepted under the earlier rule rather than resetting existing progress; every new submission must pass the existing-name/symbol checks. Validate the active-mode enum and both round shapes before rendering. Reset only an invalid mode's round where the surrounding session is readable, preserving a valid other-mode round and showing a brief notice. Unreadable or incompatible envelopes start a fresh session. The app creates a fresh round if the selected mode has none.

Catch both access to `window.localStorage` and read/write failures. Continue in memory with a visible “Progress cannot be saved in this browser session” notice. Never clear unrelated storage.

[MDN documents that storage behaviour for `file:` URLs is undefined](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). Document that moving the folder or changing browser can lose access to an existing save. For users who want a stable origin, offer `python -m http.server 8000 --bind 127.0.0.1` from the folder and `http://127.0.0.1:8000/`; this still works without internet. Python is optional and is not part of game logic.

### Scope limits

Version one includes Classic practice and Element Recall with unlimited rounds, their distinct scoring rules, local property data, classic hints, autocomplete in Classic and Recall names, a periodic-table reference/help view, and separately saved current rounds. Defer statistics, streaks, answer-pool filters, solvers, online sharing, daily emulation, archives, accounts, subscriptions, translations, PWA installation, and cloud synchronisation. None is required for the requested training loops.

## Verification and delivery

- Built-in Node tests for data completeness, all family memberships, symbol/direction feedback, input matching, round boundaries, random selection, hint stability, and storage recovery.
- Browser checks from a direct local file, plus localhost if offered: keyboard-only play, mouse selection, win and loss, eighth-guess win, no ninth guess, duplicate rejection, next round, reload, and denied storage.
- Recall checks: properties hide identity, both fields score independently, repeated letters respect occurrence counts, unequal lengths receive feedback, accepted aliases normalise visibly, partial successes lock, and the second field can win on attempt eight. Validate separate letter strips, mode switching, round restore, and name-only autocomplete without symbol disclosure and no reference spoilers during active recall.
- First-open and repeated-round checks with outbound internet unavailable. Local resources must load, and play, hints, and reference must work without any outbound request.
- Visual checks at 1440px, 1024px, and 390px, plus overflow at 320px. Compare both modes and result/dialog states to the GitGiulio-inspired visual direction: system typography, near-black/off-white surfaces, whitespace, fine rules, and green interaction accents replacing orange. Check focus/contrast and retain distinct green/yellow/grey game feedback. Verify latest installed Chrome/Edge and Firefox where available; record any untested browser.
- Deliver the complete runnable folder with a short README covering direct opening, optional server use, saves, testing, and intentional differences. The implementation plan is the companion document in `docs/superpowers/plans/`.
