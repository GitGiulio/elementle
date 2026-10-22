# Local element data

Retrieved 19 October 2026. No source is contacted while playing.

- [NCBI PubChem periodic-table API](https://pubchem.ncbi.nlm.nih.gov/rest/pug/periodictable/JSON): names, symbols, atomic numbers, electron configurations, and observed room-temperature phases. The saved factual snapshot is `sources/pubchem.json` (from the equivalent CSV endpoint).
- [CIAAW standard atomic weights, 2024 table](https://ciaaw.org/atomic-weights.htm): standard weights, including natural-variation intervals and parenthesised uncertainties. The extracted factual values are in `sources/atomic-weights.json`. Elements without a standard atomic weight display **Not assigned**. No selected-isotope mass is silently presented as a standard atomic weight.
- [Elementle element records at b20ed993](https://github.com/haokai-xuan/elementle/blob/b20ed99368360c24aea82971dd1efcf5a74c6af6/data/elements.js): compatibility family membership as recorded in the approved design. The application code and clue prose are original.
- [Royal Society of Chemistry periodic table](https://periodic-table.rsc.org/): period/group conventions and room-temperature interpretation. Lanthanides (57–71) and actinides (89–103) deliberately have no assigned group in this training dataset. This avoids presenting a disputed group-3 convention as settled.

Phase labels refer to 20 °C and 1 atm. The familiar gas/liquid/solid assignments used here do not change between 20 and 25 °C. Bulk phases of astatine, francium, and elements 99–118 are conservatively **Unknown**; synthetic-element predictions in PubChem are not relabelled as measurements.

## Classic hints

Rewritten and checked 22 October 2026. `sources/classic-hints.json` contains three individually written hints and source links for every element, covering appearance, physical properties, uses, natural occurrence, naming and discovery. The main reference is the [Royal Society of Chemistry periodic table](https://periodic-table.rsc.org/); the file links each individual element page. Supplementary references include PubChem for pure sulfur's lack of odour, European Commission material on zinc oxide, published glass-polishing research, EPA material on coloured glass, and institutional histories from Berkeley, GSI, RIKEN, Oak Ridge and Lawrence Livermore for synthetic elements.

Hints distinguish the pure element from its compounds, alloys and isotopes. Dates describe the stated milestone, such as identification, isolation, production or publication. Unresolved discovery disputes are described without assigning an unsupported sole discoverer. Known prehistoric materials are not given a fictitious modern discovery date. For very heavy elements, hints use documented synthesis and naming facts instead of treating predicted bulk appearance as observed. The prose is original; reference-page text and images are not redistributed.

Classic still selects one of the three hints per round. No external references are fetched during play. The Recall description remains its tabulated or explicitly predicted electronic configuration. Configurations of short-lived synthetic atoms are tabulated values, not claims of measured bulk properties. No target name or standalone target symbol is included in a Recall description. Noble-gas core notation refers to a different element.

## Isotopes and the interactive atom model

Retrieved and checked 19 October 2026; all model data is bundled locally.

- [CIAAW isotopic compositions, 2024](https://www.ciaaw.org/isotopic-abundances.htm), saved as `sources/isotopic-abundances.html`: select the highest representative abundance, or rank the midpoint of a quoted abundance interval. Lead-208 is explicitly an illustrative representative because lead's large material-dependent intervals do not define a universally dominant isotope; the UI labels this exception.
- [CIAAW radioactive-element table](https://www.ciaaw.org/radioactive-elements.htm), saved as `sources/radioactive-elements.html`: where no natural composition is assigned, choose the greatest central tabulated half-life, based on the [NUBASE2020 evaluation](https://doi.org/10.1088/1674-1137/abddae). The UI reports a representative long-lived isotope and the source half-life/uncertainty. Several lifetimes overlap, including technetium-97/98; these choices do not claim natural abundance or uniquely established longevity. This is a dated reference snapshot, not live nuclear data.
- [NIST's lawrencium record](https://physics.nist.gov/cgi-bin/Elements/elInfo.pl?element=103) gives `[Rn]5f14 7s2 7p1`. The saved `sources/configuration-overrides.json` replaces the older `[Rn]7s2 5f14 6d1` still returned by the PubChem endpoint when rechecked on this date. Both the clue and model use the corrected value. Other configurations retain the tabulated PubChem assignments, with elements 104–118 labelled predicted. Predicted superheavy configurations can differ between theoretical sources.

The generator exposes `isotope` (mass number, basis and abundance or half-life) and `electronConfiguration` (notation and certainty) in every element record. It never derives a nucleus by rounding a standard atomic weight. A neutral atom has Z protons, A−Z neutrons and Z electrons. Noble-gas cores expand recursively and source exceptions such as chromium, copper and palladium are retained. Conventional Hund/Pauli occupancy divides a subshell into spatial orbitals; orientations and assignment among degenerate orbitals are illustrative.

`atom.js` samples squared hydrogen-like radial wavefunctions (associated Laguerre polynomials) and real s/p/d/f spherical-harmonic angular forms, including radial/angular nodes. Shell radii are rescaled for readability: these are not self-consistent many-electron calculations or relativistic orbital maps. The centred close-packed nucleus contains exactly A schematic nucleons, not a measured nuclear arrangement. Bright dots illustrate electron occupancy, not measured locations or trajectories. Clouds and electron markers use distinct light colours for s/p/d/f types; colour does not encode charge or wavefunction phase.

Discovery-year tags in the PubChem snapshot can refer to historical material use or different milestones rather than first elemental isolation. The generator does not use these tags for hints. For example, the curated hints use [aluminum production in 1825](https://periodic-table.rsc.org/element/13/aluminium) and [calcium isolation in 1808](https://periodic-table.rsc.org/element/20/calcium), although both carry an Ancient tag in the older snapshot.

`scripts/build-data.cjs` can regenerate the ready-to-play `elements.js` from the saved factual snapshots using Node. This is a maintainer tool, not a build requirement for playing.
