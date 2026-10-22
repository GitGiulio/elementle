# Verification — 19 October 2026

## Automated checks

`node --test` on Node v24.19.0: **35 passed, 0 failed** after the atom-model and orbital-colour updates.

Coverage includes all 118 identities, exact official family memberships, period/group boundaries, source-based property fields, input names/symbols/aliases, Classic feedback, random selection across all candidates, no immediate repeats, duplicate/invalid input, eighth-attempt win/loss boundaries, repeated-letter Wordle counts, unequal lengths, locked Recall fields, independent letter knowledge, save/transcript validation, and storage getter/read/write/quota failures.

The actual HTML script sequence also compiles as classic scripts, and both modes execute successfully in a clean JavaScript context without CommonJS, fetch, or any network API. Required runtime files are local relative references. The SVG namespace URL is metadata, not an outgoing request. Content Security Policy blocks external resources and all connection APIs.

## Browser checks

Exercised the application at `http://127.0.0.1:8000/` in the Codex in-app browser, using the optional Python loopback server.

- Classic: name/symbol autocomplete, initial Up selection and wrapping, Enter selects before submission, visible direction/letter/family clues, duplicate rejection without using an attempt, fixed hint without using an attempt, reference search, and help/reference opening and closing.
- Classic eighth-guess win: Bismuth was accepted as the eighth guess, displayed a win, and disabled further entry.
- Recall: initially masked name/symbol, independent wrong-answer clues, name-first and symbol-second completion, and a partial round restored after reload with only the solved field locked.
- Periodic-table tile: number upper left, symbol centre, name below, weight bottom. An unsolved Gallium round showed `?` / `Name hidden`; after the name was solved, it showed `?` / `Gallium`; after the symbol was solved, `Ga` / `Gallium`.
- Recall eighth-submission win: seven wrong symbols with the name already solved, followed by the correct symbol, produced a win on attempt eight.
- Recall loss: eight distinct wrong name/symbol pairs revealed Tellurium, disabled input, and enabled the next round.
- Switching modes and reloading retained the appropriate mode and its own round. New rounds excluded the observed previous answers. The preview is left with fresh playable rounds.
- Mobile regression: at 390px, autocomplete originally overlapped the Guess button. Suggestions now flow into the layout on narrow screens; the repeated browser scenario incremented exactly once per submission.
- Actual accessibility snapshots included per-letter status labels and unentered-position labels. Visible keyboard focus and labelled form/dialog controls were inspected.

## Responsive checks

No horizontal page overflow was observed in either mode at 320px, 1024px, or 1440px. At 390px, Recall's tile was also visually inspected with no page overflow. Long name histories have their own horizontal scroll region.

| Viewport width | Document client width | Document scroll width |
| ---: | ---: | ---: |
| 320 | 305 | 305 |
| 1024 | 1009 | 1009 |
| 1440 | 1425 | 1425 |

The scrollbar accounts for the 15px difference. Classic displayed two card columns at 320/1024 and four at 1440. The Recall tile preserved its spatial layout on the phone-sized screen. The temporary viewport override was reset after testing.

## Independent review

A separate read-only reviewer inspected code, data generation, tests, requirements, and offline resource references and independently ran the then-current 24-test suite. Its scientific-history wording and keyboard-selection findings were corrected with failing regression checks followed by passing tests. Final clue templates use family, position, and electron configuration, omitting ambiguous history-year tags. No outstanding actionable review finding remains.

## Recall dictionary-only update

Only existing element names and existing chemical symbols are accepted for new Recall submissions. The fields are validated independently, with Aluminium/Caesium aliases retained. Unknown alphabetic entries and swapped field types are covered by regression tests; all 118 canonical names and symbols are exercised in mismatched pairs. Existing saved free-text history is preserved and still validated for shape, duplicates, solved-field locks, and terminal-state consistency.

Browser checks confirmed `notanelement` with `Fe` shows an inline name error, and `Carbon` with `Xx` shows an inline symbol error; both preserve inputs and leave the attempt counter at zero. Both fields remain aligned when an error appears. At that stage, before the later name-autocomplete request, no suggestions were present. Changing to `Carbon` with `Fe` submitted successfully and used one attempt even though the fields identify different elements. The inline error cleared after correction.

## Name autocomplete and periodic-table reference update

New automated regression checks verify name-only prefix search excludes symbol matches (Recall `fe` gives Fermium, whereas Classic also gives Iron), preserves alphabetical order and all 118 canonical names, and handles empty/unknown queries. Periodic-table position checks verify 118 distinct positions and the boundaries of the two detached f-block rows, alongside normal main-table positions.

Browser checks confirmed Recall `ca` lists Cadmium, Calcium, Californium, and Carbon with no symbol spans or symbol text. Initial ArrowUp and Enter selected Carbon without consuming an attempt or changing the symbol draft. Mouse selection selected Calcium; Calcium with H consumed one attempt, while Carbon with Xx showed the existing inline symbol error without consuming an attempt. Tab into the symbol input closed the list and reset aria-expanded. Classic retained symbol-bearing Fermium/Fm and Iron/Fe suggestions; ArrowUp/Enter selected Iron without submitting.

The reference rendered all 118 tiles and 18 group headings, with the complete La–Lu and Ac–Lr series in the lower rows. Searching Iron highlighted exactly one tile and dimmed 117, while an unknown query left all 118 positions present and reported zero matches. At 390px, searching Oxygen scrolled its tile into view within the table. The dialog had no outer vertical overflow; scrolling remained inside its table region. Page client/scroll widths both measured 375px, and Recall suggestions pushed Check answers below them. At 1024px, the name list also stayed above Check answers without page overflow. The temporary viewport override was reset. No warning/error console messages were reported.

## Recall atom model and orbital colours

The full suite includes five model checks: sourced isotope choices; all 118 expanded configurations and neutral electron totals, including Cr/Cu/Pd/Lr exceptions; exact centred nuclei with Z protons and A−Z neutrons; finite reproducible cloud samples and exact occupied-electron markers with correct type metadata; and radial-node phase metadata. The actual classic-script load order also executes the pure atom model without CommonJS or network APIs. Regenerating data produced the same SHA-256 (`257ffd08008b713f781b820d13648aedd7575f3b4aebb52f6d79ee6098f31aa9`). `git diff --check` reported no whitespace errors.

Browser checks in a temporary isolated model page covered hydrogen-1 (1 proton, zero neutrons, 1 electron), iron-56 (26/30/26), lawrencium-266 (103/163/103, including the corrected 7p assignment), and oganesson-294 (118/176/118, labelled predicted). Mouse dragging visibly changed the d-orbital projection. Individual p/d/f orbitals, nucleus-only view, keyboard rotation, zoom and enlarged-view controls worked. The colour legend resolved to mint s `rgb(168,230,189)`, light blue p `rgb(168,216,255)`, lavender d `rgb(212,185,255)`, and pale pink f `rgb(255,194,220)`; clouds/markers use this same CSS palette. Dark red protons and light gray neutrons were visually inspected in nucleus view. The temporary browser fixture was removed after checks.

Full game integration used the separate `localhost:8000` origin to avoid consuming the user's `127.0.0.1` attempts. An accepted guess retained the same model/control instance, nucleus selection and 120% zoom. Classic removed all model canvases/dialogs; returning to Recall restored its round and one canvas. Solving xenon showed isotope 132 with 54 protons, 78 neutrons and 54 electrons; Next changed the target, reset attempts and kept one canvas. Reload restored that new target with its identity hidden. The real Recall sidebar also retained the existing masked identity while displaying the model directly after the clue.

At widths 320, 390, 768 and 1024, there was no horizontal page overflow. At 320/768/1024, client and scroll widths were respectively 305/753/1009 pixels. The model followed the clue, and the shared-attempt counter followed the model without overlap. The 390px enlarged view remained within the viewport. Escape removed the enlarged dialog, preserved its selection in the inline viewer and returned focus to Expand atom model. The viewport override was reset. No warning/error console messages were observed. Saved previews: `docs/preview-atom.jpg` and `docs/preview-atom-nucleus.jpg`.

One independent review found radial phase metadata ignored the radial-wavefunction sign. A failing 2s-node test reproduced it; the fix and full suite passed. The later user request assigns visible colours to orbital types, so phase is retained in sample metadata but is not colour-coded. Shapes, scale, nuclear packing and degenerate-orbital orientations remain explicitly schematic; no exact many-electron or relativistic density calculation is claimed. Physical touch devices and the no-canvas fallback were not separately exercised.

## Periodic-table model access

Browser checks on an isolated local preview verified 118 unique native model buttons. Iron opened a labelled window with mass 56 and 26 protons, 30 neutrons and 26 electrons; zoom and nucleus selection worked. Closing returned focus to Iron without consuming an attempt or clearing the search. Keyboard Enter opened hydrogen with 1/0/1 counts, and Escape removed its model while preserving the underlying table's scroll coordinates and returning focus. Oganesson showed 118/176/118 counts; at 390px its dialog measured 337px wide and document client/scroll widths both measured 375px. Repeated closing removed model canvases. Recall expansion retained its generic title, nucleus selection and 120% zoom, and returned focus to Expand atom model; Elements remained hidden during active Recall. No warning/error console messages were reported. The viewport override was reset. Saved preview: `docs/preview-reference-model.jpg`.

## Classic factual hints, 22 October 2026

All 118 elements have three distinct authored hints, 354 in total, with per-element source links in data/sources/classic-hints.json. The updated regression first failed on the old Hydrogen family template and then passed with the replacement data. It checks complete source coverage, absence of the old structural templates and direct target-name or standalone multi-letter-symbol leaks, plus representative physical-property and discovery facts. Scientific content was checked against RSC element references and supplementary institutional sources; automated text checks do not establish scientific accuracy on their own.

A field-by-field comparison with the previous committed dataset found every non-hint value unchanged, including all Recall clues, configurations, isotopes and table properties. In a separate local browser origin, Hint displayed "Its salts can give glass and ceramic glazes an intense yellow colour." Reload preserved that text and left the attempt count at zero. No browser warning/error messages were reported. Saved preview: docs/preview-classic-hints.jpg. Full suite: 35 tests pass.

## Limits of verification

Interface text cleanup: browser inspection confirmed removal of the most-abundant-isotope caption, orbital-marker summary and always-visible schematic note from the shared model viewer, plus the requested reference guide clauses, reference eyebrow, footer and offline badge. The periodic-table title resolves to green `rgb(134,201,138)` with a white `rgb(255,255,255)` full stop. Hydrogen still rendered its model, switched to nucleus-only view and zoomed to 120%, with no warning/error console messages. Preview: `docs/preview-table-clean.jpg`.

- The browser tool prohibits `file:` navigation. Direct opening is supported by the packaging/classic-script design but was not exercised through that tool; browser checks used the documented localhost alternative.
- No system-wide internet disconnection or fresh browser profile was available through the browser controls. Network-free rule execution, local resource references, and the restrictive CSP were checked; a physically disconnected first-open browser test is not claimed.
- Separate native Chrome, Edge, and Firefox sessions, full screen-reader interaction, physical on-screen keyboards, and an actual 200% browser-zoom run were not exercised. Viewport responsiveness and the actual in-app accessibility tree were checked instead.

These are recorded test-environment limits, not hidden test failures. The runnable folder needs no installation, build, account, or external runtime service.
