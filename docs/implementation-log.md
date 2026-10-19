# Implementation ledger — plan: docs/superpowers/plans/2026-10-19-elementle-offline.md

Approved scope: Classic practice and Element Recall; GitGiulio-inspired dark styling with green accents; direct-file offline play.

Ruling: No Git repository exists in this project folder. Build in the user-selected folder; Git worktrees, Git-dependent task scripts, and commits do not apply. Keep this ledger with the deliverable instead of deleting it.

Pre-flight: Tasks 1–2 provide ElementleElements and ElementleGame to UI Task 3; interfaces agree. Tasks 4–5 provide ElementleRecall and PracticeSession to storage Task 6; interfaces agree. Task 7 verifies both modes. Storage is integrated after the two in-memory modes, as planned.

Task 1: complete. Data/lookup/scoring tests observed failing with missing modules, then 4/4 passed. All 118 records have compatible families and locally stored properties. CIAAW weights preserve intervals/uncertainties; missing standard weights and unconfirmed bulk phases are explicit unknowns. Hints use original templates over sourced discovery/configuration/position facts.

Task 2: complete, full 8/8 tests pass. Deterministic selection tests use midpoints of probability buckets: exact i/N boundaries suffered floating-point rounding in the test fixture. Separate checks retain random values zero and just below one.

Task 3: complete. Browser verified a name suggestion, card submission, direction/symbol feedback, and rejection of a repeated symbol with the counter unchanged. Green-accent desktop design inspected. Syntax and 8/8 rule/data tests passed at this stage.

Browser limitation: the browser tool explicitly disallows file: URLs. Do not bypass that restriction; browser checks use the planned localhost alternative. Direct-file compatibility will be checked structurally and reported as not exercised in this browser tool.

Task 4: complete. Recall tests failed before the missing module was implemented; 15/15 combined data/classic/recall tests passed. Added regression coverage for an alphabetic word colliding with Object.prototype (`constructor`) and fixed alias lookup to use explicit comparisons.

Task 5: complete. Browser verified hidden identity, separate fields, name-first success with the symbol remaining hidden, then symbol success and terminal reveal. Recall round 110 was solved in two turns. Reload after the first turn restored the locked name and unsolved symbol after persistence integration. Responsive visual checks remain in Task 7.

Task 6: complete. Seven storage tests failed on the missing module; the full 22/22 suite then passed, including corrupt-envelope handling, independent round recovery, transcript replay, and blocked getter/read/write handling. Browser confirmed active-mode and partial-round restoration.

Data correction: browser review exposed an off-by-one group calculation after the detached rows. Added Hf/Rn/Rf/Og boundary tests, watched the Hf assertion fail (3 vs 4), corrected the generator offsets, regenerated, and passed the full suite.

Task 7: complete. Browser checks verified both modes, partial reloads, Classic and Recall eighth-attempt wins, Recall loss, hint/reference/help, keyboard selection, and no horizontal overflow at 320/390/1024/1440px. Independent review fixes passed regression checks. Final suite: 26/26. Detailed evidence and explicit tool limits are in docs/verification.md. Runtime files are packaged for delivery.

User steering during implementation: Recall must show a familiar periodic-table tile. Updated the approved design/plan and UI: atomic number upper left, symbol centre, name beneath it, atomic weight bottom. Name/symbol are independently masked until solved; other characteristics stay outside the tile. Browser acceptance: before solving, tile shows `?`/`Name hidden`; partial solves expose only the earned field; mobile preserves the tile layout.

Final review: independent reviewer inspected all application files, data generator, requirements, and tests (24/24 at review time). Two findings entered one fix pass: an Important Ancient-tag teaching error, and initial ArrowUp selecting the penultimate suggestion. The latter is treated as a required keyboard-behaviour fix because predictable Up/Down selection is part of the approved interface. Both received failing regression checks before fixes; data is regenerated and the full suite is rerun.

Review boundaries: generic-span accessible labels were verified as named/status-bearing containers in the actual browser accessibility tree. Direct-file navigation and full screen-reader/device interoperability remain unexercised tool limitations, rather than inferred successes. Conservative unknown bulk phases and unassigned weights follow the approved data rules.

Final data decision: source history years can describe different milestones even when numeric, so the final clues omit discovery dates altogether. Use family, table position, and electronic configuration; this preserves the approved three original hints while avoiding unsupported history teaching. Updated the data regression to cover the final structural-property content and regenerated all 118 records. No game-rule change.

Mobile browser check reproduced an autocomplete overlap at 390px: suggestions covered the wrapped Guess button, so clicking that screen location selected the suggestion instead of submitting. The screenshot confirmed the cause. Suggestions now participate in layout at widths up to 500px, pushing the controls below them. Browser regression check: filling a valid name and clicking Guess must increment exactly once.

Recall validation follow-up: user requested existing names and existing symbols only, independently, with no suggestions. Reproduced the permissive alphabetic guard in submitAnswers; wrote a failing unknown-entry test, replaced it with two dataset membership checks, and retained alias/case/whitespace normalisation. Added inline accessible errors and cleared them on editing. Preserved version-one historical free-text transcripts rather than resetting user progress after the rule change; compatibility regression failed under strict replay, then passed with historical transcript validation. Updated help, README, design, and plan. Final result: 28/28 tests pass; browser rejected unknown names/symbols without an attempt, showed aligned inline errors, exposed no suggestions, and accepted Carbon with Fe as an independent valid pair.

Name-autocomplete follow-up: user changed the no-suggestions requirement to searchable names only in Recall. Reused Classic's dropdown and keyboard handling, added a name-only option to prefix search, and kept symbol input manual and dictionary validation unchanged. A failing regression first demonstrated that searching fe leaked Iron via its symbol; the name-only path now returns Fermium. Browser verified mouse/keyboard selection, no symbol disclosure, unchanged symbol drafts, invalid-symbol rejection, Tab/Escape dismissal, and Classic regression behaviour. Narrow-screen lists participate in layout at the Recall button-wrap breakpoint.

Periodic-table follow-up: user requested Elements display a periodic table rather than a list. Added standard main-table placement, detached La–Lu/Ac–Lr rows, group/period headings, family colours/legend, and name/symbol/number/family search that highlights tiles without rearranging them. Added failing-then-passing checks for 118 unique positions and f-block boundaries. Browser verified all 118 tiles, search/no-match behaviour, contained mobile scrolling and automatic visibility of a searched tile. A nested vertical-overflow issue found during inspection was fixed by sizing the dialog with flex layout and positioning tile accessibility text within each cell. Updated help and documentation. Verification: 30 automated tests pass, plus desktop/390px/1024px browser checks, with no warning/error console messages.
