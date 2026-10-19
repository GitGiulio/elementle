# Offline Elementle Practice Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans to implement this plan task-by-task, or superpowers:subagent-driven-development if the user selects delegated execution. Implementation has now been delivered after user approval. The checklist below records the approved plan; actual execution and verification, including environment limits, are in [the implementation ledger](../../implementation-log.md) and [verification report](../../verification.md).

**Goal:** A browser game that opens from a local folder and supports unlimited offline Classic practice and Element Recall rounds, with eight attempts per round in either mode.

**Architecture:** A static page loads local data and classic deferred scripts. Separate classic and recall rules determine feedback and transitions; validated browser storage restores both rounds and the selected mode; DOM code renders the game, property card, help, and reference. No backend or build is required.

**Tech Stack:** HTML, CSS, vanilla JavaScript; Node's built-in test runner for development checks only.

**Spec:** [Investigation and proposed design](../specs/2026-10-19-elementle-offline-design.md). Read its evidence, family matrix, and deliberate differences before implementing.

## Global constraints

- All 118 elements; eight valid distinct classic guesses or eight accepted recall submissions per round; unlimited successive rounds.
- Match the spec's exact official family labels and membership.
- No runtime dependencies, build, server, account, or network required to play.
- Use relative local paths and classic deferred scripts; no ES-module imports or fetched data.
- Original application code and hint prose; system fonts and local visual assets.
- Styling for both modes takes inspiration from `https://gitgiulio.github.io/`, with green accents replacing orange. Follow the spec's visual-direction section, palette, system typography, spacing, thin dividers, compact navigation, and responsive side-column layout.
- Use the shared green theme for interactions while preserving semantic green/yellow/grey guess feedback; do not reproduce the official game's pixel fonts, hexagonal navigation, or laboratory decorations.
- Classic lookup accepts English names, symbols, Aluminium, and Caesium, ignoring case and surrounding whitespace.
- Recall accepts existing element names and existing symbols independently, with name-only autocomplete and manual symbol input, and scores each with two-pass Wordle rules. Name/symbol pairs need not identify the same element. Unknown entries show inline errors and use no attempt. Canonicalise Aluminium and Caesium before name validation/scoring.
- Classic `Round`: `{answer: number, guesses: number[], hintIndex: 0|1|2, hintUsed: boolean}`.
- `RecallRound`: `{answer: number, attempts: {name: string, symbol: string}[]}` with normalised effective strings and solved fields carried forward.
- `PracticeSession`: `{activeMode: 'classic'|'recall', classic: Round|null, recall: RecallRound|null}`.
- Storage envelope: `{version: 1, session}`; key: `elementle-practice.v1`.
- Recall property cards hide name/symbol; correct fields lock; the second correct field can win on attempt eight.
- Storage failure must never prevent play; do not clear unrelated keys.
- Do not implement the spec's deferred features.

## Review focus

- A one-letter answer versus a two-letter guess must not miscolour a trailing letter: Task 1.
- A correct eighth guess wins, while the eighth wrong guess loses and no ninth guess is accepted: Task 2.
- Rapid repeated Enter/click events must not consume multiple attempts for one guess: Task 3.
- Repeated letters, unequal guess lengths, partial solves, and spelling aliases must not produce misleading recall clues: Task 4.
- Recall must show properties without leaking identity, and its two letter strips must stay independent: Task 5.
- Corrupt saves, blocked storage getters, and write-quota failures must leave both modes playable: Task 6.
- A first-ever offline open must load both modes, properties, hints, and reference without any previous browser cache: Task 7.

## File structure

| File | Responsibility |
| --- | --- |
| `index.html` | Static shell, controls, result region, dialogs, ordered script tags |
| `styles.css` | GitGiulio-inspired theme tokens with green accents, typography, shell, card grid, responsive and accessible states |
| `data/elements.js` | `ElementleElements`: 118 records, recall properties, and locally written clues/hints |
| `data/SOURCES.md` | Data provenance, family compatibility source, property conventions, clue factual references |
| `game.js` | `ElementleGame`: pure lookup, scoring, and round rules |
| `recall.js` | `ElementleRecall`: free-text normalisation, two-pass letter scoring, recall transitions |
| `storage.js` | `ElementleStorage`: safe session load/save and per-mode transcript validation |
| `app.js` | Mode selection, event handling, autocomplete, property/board rendering, dialogs, state coordination |
| `tests/data.test.cjs` | Dataset integrity and compatibility checks |
| `tests/game.test.cjs` | Scoring, matching, selection, and round-transition checks |
| `tests/recall.test.cjs` | Wordle occurrence counts, recall validation, independent field solves and terminal states |
| `tests/storage.test.cjs` | Restore/save failures and validation checks |
| `README.md` | Offline launch, optional server, save behaviour, checks, differences |

Use guarded CommonJS exports for the same named data/game/recall/storage APIs used by classic browser scripts. Keep DOM code in `app.js`. No package manifest is necessary. Run automated checks with `node --test` from the project root.

## Task 1: Verified element data, lookup, and clue evaluation

**Files:** Create `data/elements.js`, `data/SOURCES.md`, `game.js`, `tests/data.test.cjs`, `tests/game.test.cjs`.

**Interfaces:**

- `Element = {atomicNumber: number, name: string, symbol: string, family: string, hints: [string, string, string], period: number, group: number|null, atomicMass: {display: string, kind: 'standard-weight'|'isotope-mass-number'|'unknown'}, phase: {value: 'solid'|'liquid'|'gas'|'unknown', certainty: 'measured'|'predicted'|'unknown'}, recallClue: string}`.
- `ElementleElements: Element[]`, sorted by atomic number.
- `ElementleGame.findElement(input: string, elements: Element[]): Element|null`.
- `ElementleGame.searchElements(input: string, elements: Element[]): Element[]`.
- `ElementleGame.evaluateGuess(guess: Element, answer: Element): {direction: 'higher'|'lower'|'equal', letters: ('correct'|'present'|'absent')[], familyMatch: boolean}`.

- [ ] Write dataset tests requiring 118 unique numbers covering 1–118, unique canonical names/symbols, three nonempty hints per record, and exact membership/counts from the spec's family matrix. Add explicit boundary assertions for Hydrogen, Polonium, Lutetium, Lawrencium, and Oganesson.
- [ ] Add data checks requiring period 1–7, group null or 1–18, nonempty mass display with a valid kind, a valid state/certainty pair, and a nonempty recall clue for all 118 records. Unknown phase must have unknown certainty; known phase must be measured or predicted. Check clues do not explicitly include the target name or either accepted alias, and manually audit chemical notation so it does not give away the symbol.
- [ ] Write lookup tests: `findElement(' fe ', data)` is Iron; `ALUMINIUM` resolves to 13; `caesium` resolves to 55; unknown and empty input return null. Search `ca` includes Calcium and Cadmium in name order; search `fe` includes Iron through its symbol; empty search returns no suggestions.
- [ ] Write feedback tests: `Ca` against `Ac` yields `['present','present']`, direction `higher`, and family mismatch; `Fe` against `F` yields `['correct','absent']`, direction `lower`; `He` against `Ne` yields `['absent','correct']`, direction `higher`, and family match. Exact guesses produce only correct letters and equal direction.
- [ ] Run `node --test`; confirm failure due to missing data/API, rather than a test syntax problem.
- [ ] Implement the records and the three functions. Use the spec's mapping, sourced recall properties, independently written clues/hints, and explicit provenance. Document state conditions (20 °C and 1 atm), group conventions, and the distinction between standard atomic weight and representative-isotope mass number; use explicit unknowns instead of invented values. Match names/symbols exactly for lookup; match canonical name/symbol prefixes for search. Sort suggestions by canonical English name.
- [ ] Run `node --test`; require all checks to pass. Review hint prose against the cited factual references, including superheavy elements; avoid unsupported everyday-use claims.
- [ ] Review and retain this task's coherent changes. If a Git repository is in use at execution time, commit the data and scoring unit together.

## Task 2: Unlimited eight-attempt rounds

**Files:** Modify `game.js`, `tests/game.test.cjs`.

**Interfaces:** Consumes Task 1's `Element` records and clue evaluator; adds:

- `Round = {answer: number, guesses: number[], hintIndex: 0|1|2, hintUsed: boolean}`.
- `newRound(elements: Element[], previousAnswer: number|null = null, random: () => number = Math.random): Round`.
- `getStatus(round: Round): 'playing'|'won'|'lost'`.
- `submitGuess(round: Round, guessNumber: number, elements: Element[]): {round: Round, error: null|'invalid'|'duplicate'|'finished'}`.
- `useHint(round: Round): Round`.

- [ ] Add tests for selection at random values 0 and just below 1, all 118 initial candidates, exclusion of the previous answer, and exactly 117 candidates thereafter. Inject deterministic random values rather than using probabilistic pass/fail assertions.
- [ ] Add transcript tests for first-guess win, correct eighth-guess win, eighth wrong guess loss, rejection after either terminal status, and invalid/repeated guesses leaving the round unchanged. Assert no mutation of the caller's round.
- [ ] Add hint tests: index is 0–2, repeated use preserves the same index and guesses, and the next round starts with no guesses and `hintUsed: false`.
- [ ] Run `node --test` and confirm the new tests fail for the missing round API.
- [ ] Implement the functions with immutable round transitions. Derive terminal status from the last guess and length; check a win before the eight-guess loss condition. Select from a filtered candidate array with `floor(random() * candidates.length)`.
- [ ] Run `node --test`; require all data, clue, and round checks to pass. Commit this unit if using Git.

## Task 3: Playable local interface, hints, help, and reference

**Files:** Create `index.html`, `styles.css`, `app.js`; consume the existing data and game files.

**Interfaces:** `app.js` owns one in-memory `Round`; it consumes all game APIs and renders their results. It does not duplicate scoring or family inference. Load data, game, storage when available, then app through ordered deferred scripts.

- [ ] Establish the browser acceptance check before implementation: opening the page must show eight slots; entering `iron`, selecting Iron, and pressing Guess must add one card; repeating Iron must show a message and leave seven slots. Keyboard selection must require a subsequent submission, as on the official site.
- [ ] Implement the shared theme in `styles.css` using the spec's CSS custom-property palette: page `#101114`, surface `#17191d`, text `#f3f0e9`, muted `#a6a6ad`, divider `#282a2f`, accent `#86c98a`, hover `#a2dfaa`, and dark text on filled accent buttons. Use Segoe UI/system sans-serif, small monospace labels, bold tightly spaced headings, thin rules, generous spacing, and modest button rounding inspired by `https://gitgiulio.github.io/`. Reserve separate semantic variables for green/yellow/grey clues.
- [ ] Implement the compact header and desktop side-column/main-column shell, with the Classic round summary at the side. Stack the summary above gameplay at 900px and below. Fit the two/four-column card layout to the available main width, retain the spec's 1200px card breakpoint, and keep inputs and controls usable at 320px. Render untrusted text using DOM text APIs; omit portfolio content and decorative effects unrelated to gameplay.
- [ ] Implement suggestions with name/symbol prefixes, alphabetical ordering, Up/Down selection, Enter selection, Escape dismissal, and mouse/touch support. Exact valid input can submit without choosing a suggestion.
- [ ] Wire one form submit path to `findElement` and `submitGuess`, replace the round synchronously, and then render. A duplicate arriving through rapid input must hit the updated transcript and consume no attempt.
- [ ] Add terminal answer/replay controls, the fixed per-round hint toggle, help, and a searchable periodic-table reference. Render all 118 elements in 18 columns, with group/period headings, detached lanthanide/actinide rows, number/symbol/name tiles, family colours and legend, and accessible family/mass details. Search highlights matches in place and brings the first match into view; keep the table intact for empty results. Contain scrolling inside the dialog on small screens. The next-round button is available after either result and passes the old answer into `newRound`.
- [ ] Add keyboard focus styles, a feedback live region, accessible per-letter/direction descriptions, dialog close/focus return behaviour, and reduced-motion support. Colours must not be the sole explanation of feedback.
- [ ] Compare the Classic screen and its help/result states with the reference's visual language: near-black/off-white contrast, large system-font headings, quiet rules, spacious composition, green active-mode underline, and green primary controls. Verify focus/input boundaries remain visible; yellow misplaced-letter clues remain yellow and orange is not used as a branding/interaction accent. Do not load remote styles, fonts, or scripts from the reference site.
- [ ] Open the actual local file and run the acceptance check. Also check symbol entry, both alternate English names, repeated Enter/Guess activation, hint before/after guesses, periodic-table reference search, and dialog keyboard use. Inspect win/loss states using a temporary local debugging session without shipping a visible answer/debug control.
- [ ] Run `node --test` to guard against logic regressions. Commit the playable interface if using Git.

## Task 4: Recall scoring and two-field round rules

**Files:** Create `recall.js`, `tests/recall.test.cjs`; consume `data/elements.js`.

**Interfaces:** Reuse Task 1's `Element` records and family/property data; expose `ElementleRecall` with:

- `LetterStatus = 'correct'|'present'|'absent'`.
- `RecallRound = {answer: number, attempts: {name: string, symbol: string}[]}`.
- `normalizeName(input: string): string`, trimming/lowercasing and mapping the two accepted aliases to canonical names.
- `scoreLetters(guess: string, answer: string): LetterStatus[]`, for already normalised alphabetic strings of possibly different lengths.
- `newRound(elements: Element[], previousAnswer: number|null = null, random: () => number = Math.random): RecallRound`.
- `getProgress(round: RecallRound, elements: Element[]): {nameSolved: boolean, symbolSolved: boolean, status: 'playing'|'won'|'lost'}`.
- `submitAnswers(round: RecallRound, input: {name: string, symbol: string}, elements: Element[]): {round: RecallRound, error: null|'invalid-name'|'invalid-symbol'|'duplicate'|'finished'}`. For a solved field, ignore that input and carry its correct normalised value forward.
- `getLetterKnowledge(round: RecallRound, field: 'name'|'symbol', elements: Element[]): Record<string, LetterStatus>`; include only letters previously guessed, using strongest-status precedence.

- [ ] Write `scoreLetters` assertions: `('lll','helium')` returns `['absent','absent','correct']`; `('n','ne')` returns `['correct']`; `('en','ne')` returns `['present','present']`; `('nee','ne')` returns `['correct','correct','absent']`; `('aab','abc')` returns `['correct','absent','present']`. Also require `('en','n')` to return `['absent','present']`, proving a trailing guess can match a remaining occurrence. These checks pin exact-match priority, duplicate limits, shorter input, and overlong input.
- [ ] Write input tests: all 118 existing names and symbols are accepted independently, including mismatched pairs; unknown alphabetic entries, swapped name/symbol field types, empty unsolved fields, internal spaces, digits, punctuation, and misspellings are rejected without consuming a turn. Normalise ` iron ` and `FE`; canonicalise `Aluminium`/`Caesium`; do not autocorrect other misspellings.
- [ ] Write transcript tests for neither field correct, name first, symbol first, both together, and the second field solved on attempt eight. Require `n` alone not to solve target symbol `Ne`. A solved name must not reveal the symbol; later attempts carry solved values forward. Duplicate effective pairs consume no turn, but changing one half is valid. Require no mutation of input rounds and rejection after win/loss.
- [ ] Write tests for eight wrong submissions ending in a loss, no ninth submission, no immediate repeated target, new-round resets, and separate letter knowledge with green > yellow > grey precedence. A letter guessed only in the name must not appear in the symbol knowledge map.
- [ ] Run `node --test`; confirm the recall tests fail for the absent API.
- [ ] Implement a two-pass occurrence-count scorer and immutable recall transitions. Derive solved fields/status from previous attempts and check both-solved before the eight-turn loss. Keep this scorer separate from classic feedback to preserve official behaviour. Use the same candidate-array selection rule as classic mode; do not add a configurable rules engine.
- [ ] Run `node --test`; require classic and recall checks to pass. Commit this unit if using Git.

## Task 5: Recall property card, boards, and mode selector

**Files:** Modify `index.html`, `styles.css`, `app.js`; consume `recall.js` and the expanded data.

**Interfaces:** The UI now owns `PracticeSession = {activeMode: 'classic'|'recall', classic: Round|null, recall: RecallRound|null}` in memory. It consumes Task 4's APIs and Task 1's properties. Classic continues to use `ElementleGame`; recall uses `ElementleRecall`. In the final page load data, game, recall, storage, then app as ordered deferred scripts.

- [ ] Establish the browser acceptance scenario before implementation: choose Element Recall, see the property card with no name/symbol, submit an incorrect existing name/symbol pair and receive separate letter feedback, reject unknown entries with visible inline messages and no attempt, solve either field alone, finish the other, then start another random round. Switching to Classic and back must preserve the in-memory recall round.
- [ ] Add the two-option labelled mode selector and lazily create a round per mode. Render number, family, period, group, qualified mass, qualified physical state, fixed recall clue, and canonical name/symbol lengths. Use `Not assigned`, `Unknown`, and `Predicted` as specified. Check visible and accessible card labels for answer leaks.
- [ ] Present Recall's element as a periodic-table tile: atomic number at the upper left, large symbol at the centre, name beneath it, and standard atomic weight at the bottom. Mask symbol/name separately until solved, then reveal each in its normal position; show both after the round. Place family and other characteristics outside the tile and preserve the arrangement on mobile.
- [ ] Apply the same reference-inspired theme to the Recall property card, paired answer areas, histories, letter strips, and results. Put characteristics in the desktop side column and above the boards on screens at or below 900px. Reuse existing theme variables, headings, labels, spacing, button treatment, and green active-mode underline; avoid a separate visual theme for this mode.
- [ ] Add two labelled free-text inputs, `Check answers`, and the shared `0 / 8` counter. Disable browser autocomplete/spellcheck/autocorrect/autocapitalisation where supported. Reuse Classic's custom autocomplete for the name field only, with alphabetical name-prefix matching, no displayed symbols or symbol-prefix matches, keyboard/click/touch selection, and Escape/focus-out dismissal. Selection fills only the name and costs no attempt. Accept only an existing element name and an existing symbol, independently. Show inline validation text with aria-invalid/aria-describedby on the rejected field, preserve both inputs, and use no attempt; commit a valid transition synchronously to prevent rapid repeated events consuming extra turns.
- [ ] Render one tile per submitted letter in independent name/symbol histories, keeping missing positions blank and explaining unequal lengths in help. Display canonicalised alias rows with an acceptance note. Display separate A–Z knowledge strips whose statuses never downgrade, without exposing unguessed answer letters.
- [ ] Lock a solved input with a `Solved` label, keep its identity visible as earned feedback, and focus the other input. Subsequent rows show a solved indication for that field. After both are solved or the eighth unsuccessful submission, show both canonical answers and `Next random element`; do not advance automatically. Reset both histories/strips when advancing.
- [ ] Hide symbol-bearing autocomplete/Hint controls in recall and hide the reference action while recall is active; restore reference for completed-round review and Classic. Keep contextual help and the selector usable. Scope these changes by mode so classic rules and UI continue to work.
- [ ] Add per-letter accessible descriptions, field-specific live feedback, keyboard focus, and long-row scrolling inside the recall histories. Check at 320px with the on-screen keyboard and at zoom 200%; the page itself must not overflow horizontally.
- [ ] Run the browser scenario plus symbol-first, name-first, mixed-case inputs, aliases, unequal lengths, duplicate-pair rejection, one-half-changed submission, and an eighth-turn win. Check no cross-contamination between field histories/knowledge or between mode rounds. Run `node --test`; commit if using Git.

## Task 6: Restore both modes safely

**Files:** Create `storage.js`, `tests/storage.test.cjs`; modify `app.js`, `index.html`.

**Interfaces:**

- `StorageLike = {getItem(key: string): string|null, setItem(key: string, value: string): void}`.
- `ElementleStorage.loadSession(getStorage: () => StorageLike, elements: Element[]): {session: PracticeSession|null, warning: string|null}`.
- `ElementleStorage.saveSession(getStorage: () => StorageLike, session: PracticeSession): {saved: boolean, warning: string|null}`.
- The browser passes `() => window.localStorage` so the functions catch getter failures as well as operation failures.

- [ ] Add tests for sessions with each selected mode, unvisited null rounds, active/completed classic and recall rounds, and partial name-only/symbol-only successes. Reload must derive the same solved fields, coloured feedback, and letter knowledge from the saved recall transcript.
- [ ] Add classic validation tests for unknown answer/guess, duplicate guesses, more than eight guesses, guesses after an earlier win, invalid hint index/type, and a non-boolean hint flag. Add recall validation tests for unknown answer, malformed attempt objects, non-normalised or overlength strings, duplicate effective pairs, more than eight attempts, a changed solved field, and attempts after both were solved.
- [ ] Add envelope tests for missing save, invalid JSON, wrong version, and invalid active mode. Missing is normal; unreadable/incompatible root yields null with a notice. In a readable version-one session, an invalid mode value defaults to classic, and an invalid round becomes null while the other valid round is preserved, with a notice.
- [ ] Add tests for throwing storage getter, getItem failure, and setItem quota failure. Require structured failure results without exceptions escaping; a fake unrelated key must remain untouched. Validate the root object and nested round before reading fields.
- [ ] Run `node --test`; confirm the new tests fail for the missing storage API.
- [ ] Implement session validation and save/load under the specified single key. Validate recall transcripts by replaying historical shape, duplicate, locked-field, and terminal-state rules; preserve alphabetic guesses accepted before dictionary-only entry was introduced. Enforce existing names/symbols on every new submission. Discard only an invalid round where possible. Missing saves need no warning; the app creates the selected round if null.
- [ ] Integrate startup restore and saving after accepted guesses/answer pairs, classic hint use, mode switches, and new rounds. Use memory when saving fails and display the specified notice. Preserve each mode's current target independently and the classic hint index/flag.
- [ ] Run `node --test`; require all checks to pass. In the browser verify reload after a partial recall success restores its locked field and leaves the other unsolved; verify mode switching/reloading preserves both transcripts and selected mode. Completed rounds stay completed, and neither mode immediately repeats on next round. Verify denied storage still permits complete rounds in both modes. Commit if using Git.

## Task 7: Offline, visual, and delivery checks

**Files:** Create `README.md`; adjust only files implicated by checks. No hosting or publishing step.

- [ ] Run `node --test` and record the result. Confirm every Review Focus item is covered by a corresponding automated or browser check.
- [ ] Inspect application resource references and code for remote URLs, network APIs, CSS imports, dynamic imports, and module scripts. Attribution URLs in documentation or deliberately clicked external links are distinct from automatic runtime requests. All required game resources must be local.
- [ ] Open `index.html` in a fresh browser profile/context with no cached app resources and outbound internet unavailable. Play a complete round and advance in both modes; use the classic hint/reference and recall property card/letter feedback. Inspect browser developer tools for unexpected outbound requests and console failures. Record the exact method used to establish offline conditions; do not claim offline verification from source inspection alone.
- [ ] Verify win, loss, eighth-guess win, no ninth guess, invalid input, duplicates, keyboard navigation, rapid submission, reload, and storage failure. For recall also verify independent fields/letter strips, partial success, aliases, repeated letters, unequal lengths, name-only suggestions with no symbol leak, and saved mode switching. Run Node checks again only if fixes affect tested behaviour.
- [ ] Inspect Classic, Recall, help/reference dialogs, and end-of-round states at 1440px, 1024px, and 390px; check no overflow at 320px, the stacked shell at 900px and below, and readable text at browser zoom 200%. Compare typography, spacing, dividers, and header treatment against `https://gitgiulio.github.io/`, with green interaction accents replacing orange. Check text/control contrast, visible focus, and distinct green/yellow/grey clues. Confirm reduced-motion preference and keyboard-only access. Test installed Chrome/Edge and Firefox where available and explicitly record omissions.
- [ ] Verify optional localhost launch with `python -m http.server 8000 --bind 127.0.0.1` if Python is available; keep the same origin for save checks. This is an alternative to direct opening, not a requirement.
- [ ] Write a short README: open `index.html`; keep the whole folder together; no internet/install is required; how both modes work, eight shared recall submissions, solved-field locking, Wordle colours/duplicate counts, name aliases and unequal lengths; where progress lives and what happens if blocked; optional localhost command; `node --test`; property provenance and intentional hint/artwork differences.
- [ ] Deliver the runnable folder and verification results, noting browser/storage limitations actually observed. Commit final verified changes if using Git. Do not introduce a service worker, installer, framework, or online service to finish this task.

## Completion criteria

The game is packaged to open directly from the delivered folder without internet, supports unlimited Classic practice rounds with verified official scoring and Element Recall rounds with property prompts and independent Wordle feedback for name and symbol, and passes the automated and recorded browser checks. Each mode retains its own progress. The user can train without contacting Elementle or any other service. Delivered implementation and test-environment limits are documented in the linked verification report.
