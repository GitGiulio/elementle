# Local element data

Retrieved 19 October 2026. No source is contacted while playing.

- [NCBI PubChem periodic-table API](https://pubchem.ncbi.nlm.nih.gov/rest/pug/periodictable/JSON): names, symbols, atomic numbers, electron configurations, and observed room-temperature phases. The saved factual snapshot is `sources/pubchem.json` (from the equivalent CSV endpoint).
- [CIAAW standard atomic weights, 2024 table](https://ciaaw.org/atomic-weights.htm): standard weights, including natural-variation intervals and parenthesised uncertainties. The extracted factual values are in `sources/atomic-weights.json`. Elements without a standard atomic weight display **Not assigned**. No selected-isotope mass is silently presented as a standard atomic weight.
- [Elementle element records at b20ed993](https://github.com/haokai-xuan/elementle/blob/b20ed99368360c24aea82971dd1efcf5a74c6af6/data/elements.js): compatibility family membership as recorded in the approved design. The application code and clue prose are original.
- [Royal Society of Chemistry periodic table](https://periodic-table.rsc.org/): period/group conventions and room-temperature interpretation. Lanthanides (57–71) and actinides (89–103) deliberately have no assigned group in this training dataset. This avoids presenting a disputed group-3 convention as settled.

Phase labels refer to 20 °C and 1 atm. The familiar gas/liquid/solid assignments used here do not change between 20 and 25 °C. Bulk phases of astatine, francium, and elements 99–118 are conservatively **Unknown**; synthetic-element predictions in PubChem are not relabelled as measurements.

Three locally written hint templates per element use its family, period/group, and electron configuration. The Recall description gives its tabulated electronic configuration. Configurations of short-lived synthetic atoms are tabulated values, not claims of measured bulk properties. No target name or standalone target symbol is included in a Recall description. Noble-gas core notation refers to a different element.

Discovery-year tags in the source can refer to historical material use or different milestones rather than first elemental isolation. For example, RSC records [aluminum production in 1825](https://periodic-table.rsc.org/element/13/aluminium) and [calcium isolation in 1808](https://periodic-table.rsc.org/element/20/calcium), although both are tagged Ancient in the source snapshot. The game therefore deliberately excludes discovery-year tags from clues and teaches structural properties instead.

`scripts/build-data.cjs` can regenerate the ready-to-play `elements.js` from the saved factual snapshots using Node. This is a maintainer tool, not a build requirement for playing.
