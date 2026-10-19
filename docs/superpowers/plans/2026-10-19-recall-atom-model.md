# Recall atom model implementation plan

> **For agentic workers:** Use superpowers:executing-plans for inline implementation. Steps use checkboxes for tracking.

**Goal:** Add the approved offline, interactive 3D atom model directly below Recall's electron-configuration clue, with dark red protons and light gray neutrons.

**Architecture:** Keep scientific data and pure sampling logic separate from the DOM/canvas viewer. Project actual 3D coordinates onto native canvas; redraw only on resize or interaction. Reuse the current sidebar and keep rules, saved rounds and Classic unchanged.

**Tech stack:** Existing classic JavaScript scripts, native canvas/Pointer Events/ResizeObserver, Node's built-in test runner; no runtime dependencies or network calls.

**Spec:** User-approved design in this conversation: exact neutral-atom counts, representative isotope, occupied s/p/d/f clouds, rotation/zoom/isolation, hidden identity and schematic scale/geometry. User explicitly requests dark red protons and light gray neutrons.

**Accepted steering:** Distinct light colours for orbital types: mint s, light blue p, lavender d and pale pink f, with a legend. Cloud and electron-marker colours encode type rather than wavefunction phase.

## Global constraints

- Remain playable by opening index.html directly, with the existing CSP.
- Use source-grounded isotope data; do not round average atomic weights to pick an isotope.
- Most abundant terrestrial isotope when meaningful; use the longest central tabulated half-life for the fallback and disclose overlapping uncertainties. Lead has material-dependent abundances and needs a typical-isotope label.
- Counts and configuration are factual; clouds are hydrogen-like approximations, nucleus packing/orbital orientations/relative sizes are schematic. Mark superheavy configurations as predicted.
- No element name or symbol in model content or accessibility labels during an active unsolved round.
- Keep data and pure logic testable without DOM or network access.

## Review focus

- Configuration exceptions and noble-gas cores must expand to exactly Z electrons, with valid capacities and Hund occupancy.
- Hydrogen-1 has zero neutrons; all 118 nuclei must have exactly Z protons and A−Z neutrons.
- Schematic electron markers must reflect orbital occupancy, never imply planetary trajectories or measured positions.
- Switching modes/new rounds must clean up observers, drawing callbacks and expanded dialogs.
- The narrow sidebar needs touch/keyboard controls, no page overflow, and an enlarged inspection view.

## Task 1: source data and pure atom model

Files: data/sources/{isotopic-abundances,radioactive-elements}.html, scripts/build-data.cjs, data/elements.js, atom.js, tests/atom.test.cjs, data/SOURCES.md.

- [x] Write and run failing tests for selected isotope boundaries, configuration exceptions/expansion, all-118 particle counts, orbital capacities and finite reproducible samples.
- [x] Extract all isotope choices from the saved CIAAW tables. Preserve isotope basis, abundance/half-life and source provenance in the generated dataset; expose structured electronConfiguration too.
- [x] Implement pure configuration expansion, spatial-orbital occupancy, exact nucleus packing and hydrogen-like radial/angular cloud sampling. Electron markers are occupancy illustrations only.
- [x] Run tests and verify generation is reproducible.

## Task 2: interactive viewer and integration

Files: atom-view.js, app.js, index.html, styles.css.

- [x] Add an inline model under the clue: shaded dark red/light gray nucleons, orbital clouds and occupancy markers, exact counts, isotope basis and approximation note.
- [x] Support drag/touch rotation, zoom buttons, keyboard arrows/+/−, reset, nucleus-only and subshell/spatial-orbital isolation, orbital occupancy diagrams and an enlarged dialog.
- [x] Redraw on demand and clean up on rerender/mode change. Provide useful counts if canvas is unavailable.
- [x] Keep mobile sidebar layout coherent and preserve Recall drafts/view orientation across accepted attempts.

## Task 3: verification and delivery

Files: tests/browser-scripts.test.cjs, README.md, docs/{implementation-log,verification}.md.

- [x] Run the complete suite; check script load order and pure model operation without network APIs.
- [x] Browser-check rotation/zoom/isolation, nucleus view, dialog close/focus, guesses/mode switching, keyboard controls, responsive layout, source labels and no answer leakage.
- [x] Request one fresh review of scientific/data/UI correctness, resolve material findings, and update documentation with actual checks and remaining approximation limits.
- [x] Leave the folder ready to play and save a model preview.

## Execution ledger

Ruling: implement in the user's existing playable folder, without moving it or changing Git metadata. The approved task is a local-folder enhancement; no publish/merge/commit is requested.

Pre-flight: Task 1 exports ElementleAtom with pure configuration/nucleus/cloud helpers; Task 2 consumes it and returns a view with element and destroy(). Task 2's classic scripts precede app.js. Task 3 uses the actual HTML load order. No interface conflicts.

Task 1: data and logic complete. Failing tests established isotope/configuration/particle/sampling contracts, then passed. Centring and radial-sign regressions also ran red then green. Current PubChem still uses the old lawrencium assignment; NIST supplies the saved correction.

Ruling: configurations for 104–118 remain explicitly predicted. Longest central CIAAW half-lives define representative fallbacks, with overlapping-uncertainty text. Lead-208 is labelled representative.

Task 2: complete. On-demand projection, exact particles, isolation, occupancy diagrams, pointer/keyboard controls, expanded view and cleanup are implemented. Browser verified hidden identity, preservation across accepted guesses, and responsive placement.

Independent review: one P2 finding (radial sign omitted from wavefunction-phase metadata) was reproduced by a failing test and fixed. No other actionable finding was established. Later user steering changes displayed colours to orbital type; the sample data still retains correct phase. Another red/green check covers type metadata used by the palette.

Task 3: complete. 35/35 tests passed, generation reproduced byte-for-byte, and git diff --check found no whitespace errors. Native-browser checks and test-environment limits are recorded in docs/verification.md. Temporary model fixtures were removed; two previews are saved.
