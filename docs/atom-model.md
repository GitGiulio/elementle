# Atom model

The model sits directly below the electron-configuration clue and works offline, including when opening `index.html` directly. Keep `atom.js` and `atom-view.js` alongside the other application scripts and bundled element data; no install or graphics-library download is needed.

Drag to rotate, use +/− to zoom, and ↗ for a larger view. Keyboard users can focus the drawing and use arrow keys, +/− and Home. Display isolates the nucleus, a subshell or an individual occupied orbital. Expand Orbital occupancy for the electron-box diagram. Escape closes the enlarged view and returns focus. Normal guesses preserve the view; a new round replaces the atom.

Open Elements and select any periodic-table tile to explore that element in the same viewer. Tiles support mouse, touch and keyboard activation. The window identifies the selected name and symbol; closing it returns focus to its tile and preserves the table's search and scroll position.

Protons are dark red, neutrons light gray. The legend identifies mint s, light blue p, lavender d and pale pink f orbitals. Counts match the selected isotope and neutral ground-state configuration, including special configurations. In Recall, the model's labels never reveal the target name or symbol.

The mass number identifies the selected isotope. Representative long-lived isotopes are labelled where natural abundance is unavailable; lead is labelled representative because its abundances vary widely. Superheavy configurations are labelled predicted. Source snapshots and conventions are in [data/SOURCES.md](../data/SOURCES.md).

Clouds use hydrogen-like approximations. The nucleus, sizes, orientations and packing are schematic; bright dots illustrate occupancy, not paths or measured positions. Selecting an orbital shows only its electron markers; the total atom counts remain visible above the drawing. The nucleus remains visible in orbital views so you can relate the clouds to its position.

Development checks: run `node --test`. Playing requires only a modern browser with JavaScript enabled.
