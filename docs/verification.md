# Verification — 19 October 2026

## Automated checks

`node --test` on Node v24.19.0: **30 passed, 0 failed** after the name-only autocomplete and periodic-table reference updates.

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

## Limits of verification

- The browser tool prohibits `file:` navigation. Direct opening is supported by the packaging/classic-script design but was not exercised through that tool; browser checks used the documented localhost alternative.
- No system-wide internet disconnection or fresh browser profile was available through the browser controls. Network-free rule execution, local resource references, and the restrictive CSP were checked; a physically disconnected first-open browser test is not claimed.
- Separate native Chrome, Edge, and Firefox sessions, full screen-reader interaction, physical on-screen keyboards, and an actual 200% browser-zoom run were not exercised. Viewport responsiveness and the actual in-app accessibility tree were checked instead.

These are recorded test-environment limits, not hidden test failures. The runnable folder needs no installation, build, account, or external runtime service.
