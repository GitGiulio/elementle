// Local factual dataset. Provenance and conventions: data/SOURCES.md
const ElementleElements = [
  {
    "atomicNumber": 1,
    "name": "Hydrogen",
    "symbol": "H",
    "family": "Nonmetal",
    "period": 1,
    "group": 1,
    "atomicMass": {
      "display": "[1.00784,1.00811]",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "gas",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 1,
      "basis": "most-abundant",
      "abundance": "[0.999 72, 0.999 99]"
    },
    "electronConfiguration": {
      "notation": "1s1",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is 1s1.",
    "hints": [
      "It is a colourless gas with a lower density than any other gas.",
      "Fuel cells can combine it with oxygen to produce electricity and water.",
      "Henry Cavendish distinguished this flammable gas from other gases in 1766."
    ]
  },
  {
    "atomicNumber": 2,
    "name": "Helium",
    "symbol": "He",
    "family": "Noble Gas",
    "period": 1,
    "group": 18,
    "atomicMass": {
      "display": "4.002602(2)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "gas",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 4,
      "basis": "most-abundant",
      "abundance": "0.999 998(2)"
    },
    "electronConfiguration": {
      "notation": "1s2",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is 1s2.",
    "hints": [
      "It can lift balloons without the fire risk of hydrogen.",
      "Its liquid form cools the superconducting magnets in MRI scanners.",
      "Astronomers detected it in sunlight in 1868, before it was identified on Earth."
    ]
  },
  {
    "atomicNumber": 3,
    "name": "Lithium",
    "symbol": "Li",
    "family": "Alkali Metal",
    "period": 2,
    "group": 1,
    "atomicMass": {
      "display": "[6.938,6.997]",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 7,
      "basis": "most-abundant",
      "abundance": "[0.922, 0.981]"
    },
    "electronConfiguration": {
      "notation": "[He]2s1",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [He]2s1.",
    "hints": [
      "This soft, silvery metal has the lowest density of any metal.",
      "It is a key ingredient in rechargeable batteries for phones and electric cars.",
      "Johan August Arfvedson identified it in a Swedish mineral in 1817."
    ]
  },
  {
    "atomicNumber": 4,
    "name": "Beryllium",
    "symbol": "Be",
    "family": "Alkaline Earth Metal",
    "period": 2,
    "group": 2,
    "atomicMass": {
      "display": "9.0121831(5)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 9,
      "basis": "most-abundant",
      "abundance": "1"
    },
    "electronConfiguration": {
      "notation": "[He]2s2",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [He]2s2.",
    "hints": [
      "It is found in the mineral family that includes emerald and aquamarine.",
      "Thin foils of this metal let X-rays pass through, making useful windows for X-ray equipment.",
      "Adding it to copper produces alloys used for springs and non-sparking tools."
    ]
  },
  {
    "atomicNumber": 5,
    "name": "Boron",
    "symbol": "B",
    "family": "Metalloid",
    "period": 2,
    "group": 13,
    "atomicMass": {
      "display": "[10.806,10.821]",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 11,
      "basis": "most-abundant",
      "abundance": "[0.796, 0.811]"
    },
    "electronConfiguration": {
      "notation": "[He]2s2 2p1",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [He]2s2 2p1.",
    "hints": [
      "Its oxide helps make glass that withstands heat, including laboratory glassware.",
      "One of its isotopes absorbs neutrons and helps control nuclear reactors.",
      "Plants need it to build healthy cell walls."
    ]
  },
  {
    "atomicNumber": 6,
    "name": "Carbon",
    "symbol": "C",
    "family": "Nonmetal",
    "period": 2,
    "group": 14,
    "atomicMass": {
      "display": "[12.0096,12.0116]",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 12,
      "basis": "most-abundant",
      "abundance": "[0.9884, 0.9904]"
    },
    "electronConfiguration": {
      "notation": "[He]2s2 2p2",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [He]2s2 2p2.",
    "hints": [
      "Diamond and graphite are very different-looking forms of this same element.",
      "Its soft graphite form makes the marks left by ordinary pencils.",
      "Its ability to form strong chains is central to the chemistry of fuels and plastics."
    ]
  },
  {
    "atomicNumber": 7,
    "name": "Nitrogen",
    "symbol": "N",
    "family": "Nonmetal",
    "period": 2,
    "group": 15,
    "atomicMass": {
      "display": "[14.00643,14.00728]",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "gas",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 14,
      "basis": "most-abundant",
      "abundance": "[0.995 78, 0.996 63]"
    },
    "electronConfiguration": {
      "notation": "[He] 2s2 2p3",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [He] 2s2 2p3.",
    "hints": [
      "This colourless gas makes up roughly four fifths of Earth's atmosphere.",
      "Food packaging can use this relatively unreactive gas to help preserve its contents.",
      "Daniel Rutherford recognised it as a distinct substance in Edinburgh in 1772."
    ]
  },
  {
    "atomicNumber": 8,
    "name": "Oxygen",
    "symbol": "O",
    "family": "Nonmetal",
    "period": 2,
    "group": 16,
    "atomicMass": {
      "display": "[15.99903,15.99977]",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "gas",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 16,
      "basis": "most-abundant",
      "abundance": "[0.997 38, 0.997 76]"
    },
    "electronConfiguration": {
      "notation": "[He]2s2 2p4",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [He]2s2 2p4.",
    "hints": [
      "It supports burning, and animals need it for respiration.",
      "Steelmakers use large quantities of this gas to help remove impurities from molten metal.",
      "Joseph Priestley produced it by heating mercury oxide in 1774."
    ]
  },
  {
    "atomicNumber": 9,
    "name": "Fluorine",
    "symbol": "F",
    "family": "Halogen",
    "period": 2,
    "group": 17,
    "atomicMass": {
      "display": "18.998403162(5)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "gas",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 19,
      "basis": "most-abundant",
      "abundance": "1"
    },
    "electronConfiguration": {
      "notation": "[He]2s2 2p5",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [He]2s2 2p5.",
    "hints": [
      "This very pale yellow-green gas is exceptionally reactive.",
      "Its fluoride compounds are added to some toothpastes to protect teeth.",
      "Henri Moissan isolated the element by electrolysis in France in 1886."
    ]
  },
  {
    "atomicNumber": 10,
    "name": "Neon",
    "symbol": "Ne",
    "family": "Noble Gas",
    "period": 2,
    "group": 18,
    "atomicMass": {
      "display": "20.1797(6)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "gas",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 20,
      "basis": "most-abundant",
      "abundance": "0.9048(3)"
    },
    "electronConfiguration": {
      "notation": "[He]2s2 2p6",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [He]2s2 2p6.",
    "hints": [
      "An electrical discharge makes this gas glow reddish orange.",
      "It fills some of the glowing glass tubes used in advertising signs.",
      "William Ramsay and Morris Travers discovered it in London in 1898."
    ]
  },
  {
    "atomicNumber": 11,
    "name": "Sodium",
    "symbol": "Na",
    "family": "Alkali Metal",
    "period": 3,
    "group": 1,
    "atomicMass": {
      "display": "22.98976928(2)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 23,
      "basis": "most-abundant",
      "abundance": "1"
    },
    "electronConfiguration": {
      "notation": "[Ne]3s1",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Ne]3s1.",
    "hints": [
      "This soft metal rapidly tarnishes in air and reacts vigorously with water.",
      "Its chloride is ordinary table salt, rather than the reactive metal itself.",
      "Its vapour gives some street lamps their characteristic orange-yellow light."
    ]
  },
  {
    "atomicNumber": 12,
    "name": "Magnesium",
    "symbol": "Mg",
    "family": "Alkaline Earth Metal",
    "period": 3,
    "group": 2,
    "atomicMass": {
      "display": "[24.304,24.307]",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 24,
      "basis": "most-abundant",
      "abundance": "[0.7888, 0.7905]"
    },
    "electronConfiguration": {
      "notation": "[Ne]3s2",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Ne]3s2.",
    "hints": [
      "This silvery metal burns with a dazzling white light.",
      "Its lightweight alloys are used in vehicles, cameras and aircraft.",
      "An atom of this element sits at the centre of a chlorophyll molecule."
    ]
  },
  {
    "atomicNumber": 13,
    "name": "Aluminum",
    "symbol": "Al",
    "family": "Metal",
    "period": 3,
    "group": 13,
    "atomicMass": {
      "display": "26.9815384(3)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 27,
      "basis": "most-abundant",
      "abundance": "1"
    },
    "electronConfiguration": {
      "notation": "[Ne]3s2 3p1",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Ne]3s2 3p1.",
    "hints": [
      "This lightweight metal resists corrosion thanks to its protective surface oxide.",
      "It is used in drinks cans, kitchen foil and aircraft structures.",
      "Hans Christian Oersted produced an impure sample in Copenhagen in 1825."
    ]
  },
  {
    "atomicNumber": 14,
    "name": "Silicon",
    "symbol": "Si",
    "family": "Metalloid",
    "period": 3,
    "group": 14,
    "atomicMass": {
      "display": "[28.084,28.086]",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 28,
      "basis": "most-abundant",
      "abundance": "[0.921 91, 0.923 18]"
    },
    "electronConfiguration": {
      "notation": "[Ne]3s2 3p2",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Ne]3s2 3p2.",
    "hints": [
      "Highly purified crystals of this element are used in computer chips and other electronic devices.",
      "Its dioxide occurs in sand and is a major ingredient in glass.",
      "Jons Jacob Berzelius obtained a relatively pure sample in Stockholm in 1824."
    ]
  },
  {
    "atomicNumber": 15,
    "name": "Phosphorus",
    "symbol": "P",
    "family": "Nonmetal",
    "period": 3,
    "group": 15,
    "atomicMass": {
      "display": "30.973761998(5)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 31,
      "basis": "most-abundant",
      "abundance": "1"
    },
    "electronConfiguration": {
      "notation": "[Ne]3s2 3p3",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Ne]3s2 3p3.",
    "hints": [
      "Its red form is used on the striking surface of safety-match boxes.",
      "Its white form is a waxy solid that can glow and catch fire in air.",
      "Hennig Brand obtained it from processed urine in Hamburg in 1669."
    ]
  },
  {
    "atomicNumber": 16,
    "name": "Sulfur",
    "symbol": "S",
    "family": "Nonmetal",
    "period": 3,
    "group": 16,
    "atomicMass": {
      "display": "[32.059,32.076]",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 32,
      "basis": "most-abundant",
      "abundance": "[0.9441, 0.9529]"
    },
    "electronConfiguration": {
      "notation": "[Ne]3s2 3p4",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Ne]3s2 3p4.",
    "hints": [
      "Its familiar form is a yellow solid; the pure element is odourless.",
      "It is used to vulcanise rubber, improving the material's useful properties.",
      "Natural deposits of the uncombined element are often associated with volcanic areas."
    ]
  },
  {
    "atomicNumber": 17,
    "name": "Chlorine",
    "symbol": "Cl",
    "family": "Halogen",
    "period": 3,
    "group": 17,
    "atomicMass": {
      "display": "[35.446,35.457]",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "gas",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 35,
      "basis": "most-abundant",
      "abundance": "[0.755, 0.761]"
    },
    "electronConfiguration": {
      "notation": "[Ne]3s2 3p5",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Ne]3s2 3p5.",
    "hints": [
      "This yellow-green gas has a sharp, choking smell.",
      "It is used to disinfect drinking water and swimming pools.",
      "Carl Wilhelm Scheele produced the gas in Uppsala, Sweden, in 1774."
    ]
  },
  {
    "atomicNumber": 18,
    "name": "Argon",
    "symbol": "Ar",
    "family": "Noble Gas",
    "period": 3,
    "group": 18,
    "atomicMass": {
      "display": "[39.792,39.963]",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "gas",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 40,
      "basis": "most-abundant",
      "abundance": "[0.936, 1.000]"
    },
    "electronConfiguration": {
      "notation": "[Ne]3s2 3p6",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Ne]3s2 3p6.",
    "hints": [
      "Welders use this colourless, unreactive gas to shield hot metal from air.",
      "It can fill the gap between panes in double-glazed windows.",
      "Lord Rayleigh and William Ramsay identified it in air in 1894."
    ]
  },
  {
    "atomicNumber": 19,
    "name": "Potassium",
    "symbol": "K",
    "family": "Alkali Metal",
    "period": 4,
    "group": 1,
    "atomicMass": {
      "display": "39.0983(1)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 39,
      "basis": "most-abundant",
      "abundance": "0.932 581(44)"
    },
    "electronConfiguration": {
      "notation": "[Ar]4s1",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Ar]4s1.",
    "hints": [
      "This soft metal can react with water while burning with a lavender-coloured flame.",
      "Its compounds are important ingredients in agricultural fertilisers.",
      "Its ions help maintain fluid and electrolyte balance in living cells."
    ]
  },
  {
    "atomicNumber": 20,
    "name": "Calcium",
    "symbol": "Ca",
    "family": "Alkaline Earth Metal",
    "period": 4,
    "group": 2,
    "atomicMass": {
      "display": "40.078(4)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 40,
      "basis": "most-abundant",
      "abundance": "0.969 41(156)"
    },
    "electronConfiguration": {
      "notation": "[Ar]4s2",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Ar]4s2.",
    "hints": [
      "Its phosphate compounds provide much of the mineral structure of bones and teeth.",
      "Its carbonate occurs in limestone, which is used to make cement.",
      "Humphry Davy isolated the metal in 1808 using electrolysis and a mercury amalgam."
    ]
  },
  {
    "atomicNumber": 21,
    "name": "Scandium",
    "symbol": "Sc",
    "family": "Transition Metal",
    "period": 4,
    "group": 3,
    "atomicMass": {
      "display": "44.955907(4)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 45,
      "basis": "most-abundant",
      "abundance": "1"
    },
    "electronConfiguration": {
      "notation": "[Ar]4s2 3d1",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Ar]4s2 3d1.",
    "hints": [
      "This silvery metal is light enough to be useful in lightweight alloys.",
      "Alloying it with aluminium has produced materials used in high-end bicycle frames.",
      "Lars Frederik Nilson identified it in Sweden in 1879."
    ]
  },
  {
    "atomicNumber": 22,
    "name": "Titanium",
    "symbol": "Ti",
    "family": "Transition Metal",
    "period": 4,
    "group": 4,
    "atomicMass": {
      "display": "47.867(1)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 48,
      "basis": "most-abundant",
      "abundance": "0.7372(3)"
    },
    "electronConfiguration": {
      "notation": "[Ar]4s2 3d2",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Ar]4s2 3d2.",
    "hints": [
      "This strong metal is much less dense than steel.",
      "Its white dioxide pigment is used in paints and sunscreens.",
      "William Gregor recognised an unknown metal in Cornish black sand in 1791."
    ]
  },
  {
    "atomicNumber": 23,
    "name": "Vanadium",
    "symbol": "V",
    "family": "Transition Metal",
    "period": 4,
    "group": 5,
    "atomicMass": {
      "display": "50.9415(1)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 51,
      "basis": "most-abundant",
      "abundance": "0.997 50(10)"
    },
    "electronConfiguration": {
      "notation": "[Ar]4s2 3d3",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Ar]4s2 3d3.",
    "hints": [
      "Small additions of this metal help make tough steels for tools and axles.",
      "Its silvery surface is resistant to corrosion.",
      "Andres Manuel del Rio identified it in Mexico in 1801, but the discovery was initially rejected."
    ]
  },
  {
    "atomicNumber": 24,
    "name": "Chromium",
    "symbol": "Cr",
    "family": "Transition Metal",
    "period": 4,
    "group": 6,
    "atomicMass": {
      "display": "51.9961(6)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 52,
      "basis": "most-abundant",
      "abundance": "0.837 89(18)"
    },
    "electronConfiguration": {
      "notation": "[Ar]3d5 4s1",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Ar]3d5 4s1.",
    "hints": [
      "Plating with this metal can give an object a shiny, mirror-like finish.",
      "It is a key addition that helps stainless steel resist rust.",
      "A vivid red mineral from Siberia led to its identification by Vauquelin in Paris."
    ]
  },
  {
    "atomicNumber": 25,
    "name": "Manganese",
    "symbol": "Mn",
    "family": "Transition Metal",
    "period": 4,
    "group": 7,
    "atomicMass": {
      "display": "54.938043(2)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 55,
      "basis": "most-abundant",
      "abundance": "1"
    },
    "electronConfiguration": {
      "notation": "[Ar]4s2 3d5",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Ar]4s2 3d5.",
    "hints": [
      "The pure metal is silvery, hard and too brittle for many structural uses.",
      "Its steel alloys are used in demanding applications such as railway tracks.",
      "Its dark oxide was used as a pigment by prehistoric cave painters."
    ]
  },
  {
    "atomicNumber": 26,
    "name": "Iron",
    "symbol": "Fe",
    "family": "Transition Metal",
    "period": 4,
    "group": 8,
    "atomicMass": {
      "display": "55.845(2)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 56,
      "basis": "most-abundant",
      "abundance": "0.917 54(106)"
    },
    "electronConfiguration": {
      "notation": "[Ar]4s2 3d6",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Ar]4s2 3d6.",
    "hints": [
      "This grey metal forms rust when exposed to damp air.",
      "Combining it with controlled amounts of carbon produces steel.",
      "It is part of haemoglobin, the protein that transports oxygen in blood."
    ]
  },
  {
    "atomicNumber": 27,
    "name": "Cobalt",
    "symbol": "Co",
    "family": "Transition Metal",
    "period": 4,
    "group": 9,
    "atomicMass": {
      "display": "58.933194(3)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 59,
      "basis": "most-abundant",
      "abundance": "1"
    },
    "electronConfiguration": {
      "notation": "[Ar]4s2 3d7",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Ar]4s2 3d7.",
    "hints": [
      "This silvery-blue metal can be magnetised.",
      "Its salts have long supplied rich blue colours for glass, pottery and pigments.",
      "Its heat-resistant alloys are used in jet-engine turbines."
    ]
  },
  {
    "atomicNumber": 28,
    "name": "Nickel",
    "symbol": "Ni",
    "family": "Transition Metal",
    "period": 4,
    "group": 10,
    "atomicMass": {
      "display": "58.6934(4)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 58,
      "basis": "most-abundant",
      "abundance": "0.680 769(190)"
    },
    "electronConfiguration": {
      "notation": "[Ar]4s2 3d8",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Ar]4s2 3d8.",
    "hints": [
      "It is an important ingredient in many corrosion-resistant stainless steels.",
      "An alloy of this metal and chromium is used for heating elements in toasters.",
      "Axel Fredrik Cronstedt investigated its ore in Sweden in 1751."
    ]
  },
  {
    "atomicNumber": 29,
    "name": "Copper",
    "symbol": "Cu",
    "family": "Transition Metal",
    "period": 4,
    "group": 11,
    "atomicMass": {
      "display": "63.546(3)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 63,
      "basis": "most-abundant",
      "abundance": "0.6915(15)"
    },
    "electronConfiguration": {
      "notation": "[Ar]4s1 3d10",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Ar]4s1 3d10.",
    "hints": [
      "This reddish metal is easily drawn into wires for electrical equipment.",
      "Mixing it with tin produces bronze.",
      "Beads made from this metal have been found in northern Iraq dating back over ten thousand years."
    ]
  },
  {
    "atomicNumber": 30,
    "name": "Zinc",
    "symbol": "Zn",
    "family": "Transition Metal",
    "period": 4,
    "group": 12,
    "atomicMass": {
      "display": "65.38(2)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 64,
      "basis": "most-abundant",
      "abundance": "0.4917(75)"
    },
    "electronConfiguration": {
      "notation": "[Ar]4s2 3d10",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Ar]4s2 3d10.",
    "hints": [
      "It is used to coat steel in the rust-prevention process called galvanising.",
      "Alloying it with copper produces brass.",
      "Its white oxide is used in products including sunscreens and cosmetics."
    ]
  },
  {
    "atomicNumber": 31,
    "name": "Gallium",
    "symbol": "Ga",
    "family": "Metal",
    "period": 4,
    "group": 13,
    "atomicMass": {
      "display": "69.723(1)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 69,
      "basis": "most-abundant",
      "abundance": "0.601 08(50)"
    },
    "electronConfiguration": {
      "notation": "[Ar]4s2 3d10 4p1",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Ar]4s2 3d10 4p1.",
    "hints": [
      "It melts at about 30 degrees Celsius, low enough for a warm hand to melt it.",
      "Its compounds are used in LEDs and other semiconductor devices.",
      "Paul-Emile Lecoq de Boisbaudran discovered it in France in 1875."
    ]
  },
  {
    "atomicNumber": 32,
    "name": "Germanium",
    "symbol": "Ge",
    "family": "Metalloid",
    "period": 4,
    "group": 14,
    "atomicMass": {
      "display": "72.630(8)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 74,
      "basis": "most-abundant",
      "abundance": "0.3652(12)"
    },
    "electronConfiguration": {
      "notation": "[Ar]4s2 3d10 4p2",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Ar]4s2 3d10 4p2.",
    "hints": [
      "This brittle, silvery-white material is a semiconductor.",
      "It was widely used in early transistors before silicon became dominant.",
      "Clemens Winkler discovered it in Freiberg, Germany, in 1886."
    ]
  },
  {
    "atomicNumber": 33,
    "name": "Arsenic",
    "symbol": "As",
    "family": "Metalloid",
    "period": 4,
    "group": 15,
    "atomicMass": {
      "display": "74.921595(6)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 75,
      "basis": "most-abundant",
      "abundance": "1"
    },
    "electronConfiguration": {
      "notation": "[Ar]4s2 3d10 4p3",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Ar]4s2 3d10 4p3.",
    "hints": [
      "Its metallic form has a shiny grey surface but breaks rather than bending easily.",
      "It is used in small amounts to alter the electrical properties of semiconductors.",
      "Some of its compounds have medical applications despite its reputation as a poison."
    ]
  },
  {
    "atomicNumber": 34,
    "name": "Selenium",
    "symbol": "Se",
    "family": "Nonmetal",
    "period": 4,
    "group": 16,
    "atomicMass": {
      "display": "78.971(8)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 80,
      "basis": "most-abundant",
      "abundance": "0.4980(36)"
    },
    "electronConfiguration": {
      "notation": "[Ar]4s2 3d10 4p4",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Ar]4s2 3d10 4p4.",
    "hints": [
      "It can appear as a red powder or as a grey, metallic-looking solid.",
      "Its electrical resistance changes with light, making it useful in light-sensitive devices.",
      "Berzelius discovered it in 1817 while investigating residue from acid production in Stockholm."
    ]
  },
  {
    "atomicNumber": 35,
    "name": "Bromine",
    "symbol": "Br",
    "family": "Halogen",
    "period": 4,
    "group": 17,
    "atomicMass": {
      "display": "[79.901,79.907]",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "liquid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 79,
      "basis": "most-abundant",
      "abundance": "[0.505, 0.508]"
    },
    "electronConfiguration": {
      "notation": "[Ar]4s2 3d10 4p5",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Ar]4s2 3d10 4p5.",
    "hints": [
      "At room temperature it is a dark red-brown liquid with a strong, unpleasant smell.",
      "Some of its compounds have been used to make materials less flammable.",
      "Antoine-Jerome Balard reported its discovery from French brines in 1826."
    ]
  },
  {
    "atomicNumber": 36,
    "name": "Krypton",
    "symbol": "Kr",
    "family": "Noble Gas",
    "period": 4,
    "group": 18,
    "atomicMass": {
      "display": "83.798(2)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "gas",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 84,
      "basis": "most-abundant",
      "abundance": "0.569 87(15)"
    },
    "electronConfiguration": {
      "notation": "[Ar]4s2 3d10 4p6",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Ar]4s2 3d10 4p6.",
    "hints": [
      "This gas is used in some high-speed photographic flash lamps.",
      "A compound of this element with fluorine is used in certain lasers.",
      "Ramsay and Travers discovered it while separating the gases in liquid air in 1898."
    ]
  },
  {
    "atomicNumber": 37,
    "name": "Rubidium",
    "symbol": "Rb",
    "family": "Alkali Metal",
    "period": 5,
    "group": 1,
    "atomicMass": {
      "display": "85.4678(3)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 85,
      "basis": "most-abundant",
      "abundance": "0.7217(2)"
    },
    "electronConfiguration": {
      "notation": "[Kr]5s1",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Kr]5s1.",
    "hints": [
      "This soft metal can ignite in air and reacts violently with water.",
      "It has been used in photocells that detect light.",
      "Bunsen and Kirchhoff identified it in 1861 from distinctive deep-red spectral lines."
    ]
  },
  {
    "atomicNumber": 38,
    "name": "Strontium",
    "symbol": "Sr",
    "family": "Alkaline Earth Metal",
    "period": 5,
    "group": 2,
    "atomicMass": {
      "display": "87.62(1)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 88,
      "basis": "most-abundant",
      "abundance": "0.8258(35)"
    },
    "electronConfiguration": {
      "notation": "[Kr]5s2",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Kr]5s2.",
    "hints": [
      "Its salts give many fireworks and signal flares their vivid red colour.",
      "Its aluminate is used in some long-lasting glow-in-the-dark materials.",
      "Its name comes from Strontian, a village in Scotland."
    ]
  },
  {
    "atomicNumber": 39,
    "name": "Yttrium",
    "symbol": "Y",
    "family": "Transition Metal",
    "period": 5,
    "group": 3,
    "atomicMass": {
      "display": "88.905838(2)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 89,
      "basis": "most-abundant",
      "abundance": "1"
    },
    "electronConfiguration": {
      "notation": "[Kr]5s2 4d1",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Kr]5s2 4d1.",
    "hints": [
      "Garnet crystals containing this element are used in lasers that can cut metal.",
      "Its compounds helped produce red light in older colour television screens.",
      "Johan Gadolin identified its oxide in 1794 while analysing a mineral from Ytterby."
    ]
  },
  {
    "atomicNumber": 40,
    "name": "Zirconium",
    "symbol": "Zr",
    "family": "Transition Metal",
    "period": 5,
    "group": 4,
    "atomicMass": {
      "display": "91.222(3)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 90,
      "basis": "most-abundant",
      "abundance": "0.5147(6)"
    },
    "electronConfiguration": {
      "notation": "[Kr]5s2 4d2",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Kr]5s2 4d2.",
    "hints": [
      "Its alloys surround fuel in nuclear reactors because they absorb relatively few neutrons.",
      "Its dioxide is used to make cubic zirconia, a familiar diamond substitute.",
      "Martin Klaproth identified its oxide in the gemstone zircon in 1789."
    ]
  },
  {
    "atomicNumber": 41,
    "name": "Niobium",
    "symbol": "Nb",
    "family": "Transition Metal",
    "period": 5,
    "group": 5,
    "atomicMass": {
      "display": "92.90637(1)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 93,
      "basis": "most-abundant",
      "abundance": "1"
    },
    "electronConfiguration": {
      "notation": "[Kr]5s1 4d4",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Kr]5s1 4d4.",
    "hints": [
      "Its alloys are used in superconducting magnets for MRI scanners and particle accelerators.",
      "Small additions strengthen steels used in pipelines and structural beams.",
      "Charles Hatchett identified it in 1801 while studying a mineral at the British Museum."
    ]
  },
  {
    "atomicNumber": 42,
    "name": "Molybdenum",
    "symbol": "Mo",
    "family": "Transition Metal",
    "period": 5,
    "group": 6,
    "atomicMass": {
      "display": "95.95(1)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 98,
      "basis": "most-abundant",
      "abundance": "0.242 92(80)"
    },
    "electronConfiguration": {
      "notation": "[Kr]5s1 4d5",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Kr]5s1 4d5.",
    "hints": [
      "Its high-temperature steel alloys are used in engine parts and cutting tools.",
      "Its disulfide is used as a lubricant additive.",
      "Its ore was once confused with graphite and with ores of lead."
    ]
  },
  {
    "atomicNumber": 43,
    "name": "Technetium",
    "symbol": "Tc",
    "family": "Transition Metal",
    "period": 5,
    "group": 7,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 97,
      "basis": "representative-long-lived",
      "halfLife": "4.21(16) Ma"
    },
    "electronConfiguration": {
      "notation": "[Kr]5s2 4d5",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Kr]5s2 4d5.",
    "hints": [
      "A metastable isotope of this element is widely used for medical imaging.",
      "All of its isotopes are radioactive; only tiny natural traces occur on Earth.",
      "It became the first artificially produced element to be identified, in Italy in 1937."
    ]
  },
  {
    "atomicNumber": 44,
    "name": "Ruthenium",
    "symbol": "Ru",
    "family": "Transition Metal",
    "period": 5,
    "group": 8,
    "atomicMass": {
      "display": "101.07(2)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 102,
      "basis": "most-abundant",
      "abundance": "0.3155(14)"
    },
    "electronConfiguration": {
      "notation": "[Kr]5s1 4d7",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Kr]5s1 4d7.",
    "hints": [
      "Its compounds and alloys are used in chip resistors and electrical contacts.",
      "Small additions can harden platinum and palladium.",
      "Its name comes from a Latin name for Russia."
    ]
  },
  {
    "atomicNumber": 45,
    "name": "Rhodium",
    "symbol": "Rh",
    "family": "Transition Metal",
    "period": 5,
    "group": 9,
    "atomicMass": {
      "display": "102.90549(2)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 103,
      "basis": "most-abundant",
      "abundance": "1"
    },
    "electronConfiguration": {
      "notation": "[Kr]5s1 4d8",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Kr]5s1 4d8.",
    "hints": [
      "It helps catalytic converters remove nitrogen oxides from vehicle exhaust.",
      "Its reflective surface is useful for coatings on optical mirrors.",
      "William Wollaston discovered it in 1803 while working with platinum."
    ]
  },
  {
    "atomicNumber": 46,
    "name": "Palladium",
    "symbol": "Pd",
    "family": "Transition Metal",
    "period": 5,
    "group": 10,
    "atomicMass": {
      "display": "106.42(1)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 106,
      "basis": "most-abundant",
      "abundance": "0.2733(3)"
    },
    "electronConfiguration": {
      "notation": "[Kr]4d10",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Kr]4d10.",
    "hints": [
      "It is used as a catalyst in vehicle exhaust converters.",
      "It can be alloyed with gold to make white jewellery alloys.",
      "This metal can absorb surprisingly large quantities of hydrogen."
    ]
  },
  {
    "atomicNumber": 47,
    "name": "Silver",
    "symbol": "Ag",
    "family": "Transition Metal",
    "period": 5,
    "group": 11,
    "atomicMass": {
      "display": "107.8682(2)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 107,
      "basis": "most-abundant",
      "abundance": "0.518 39(8)"
    },
    "electronConfiguration": {
      "notation": "[Kr]5s1 4d10",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Kr]5s1 4d10.",
    "hints": [
      "This shiny metal reflects visible light extremely well, making it useful for mirrors.",
      "The sterling jewellery alloy contains 92.5 percent of this element.",
      "Sulfur compounds can turn its surface dark by forming a sulfide tarnish."
    ]
  },
  {
    "atomicNumber": 48,
    "name": "Cadmium",
    "symbol": "Cd",
    "family": "Transition Metal",
    "period": 5,
    "group": 12,
    "atomicMass": {
      "display": "112.414(4)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 114,
      "basis": "most-abundant",
      "abundance": "0.287 54(81)"
    },
    "electronConfiguration": {
      "notation": "[Kr]5s2 4d10",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Kr]5s2 4d10.",
    "hints": [
      "This toxic metal has a silvery surface with a bluish tint.",
      "It was widely used with nickel in rechargeable batteries.",
      "Its compounds have supplied bright yellow and red pigments."
    ]
  },
  {
    "atomicNumber": 49,
    "name": "Indium",
    "symbol": "In",
    "family": "Metal",
    "period": 5,
    "group": 13,
    "atomicMass": {
      "display": "114.818(1)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 115,
      "basis": "most-abundant",
      "abundance": "0.957 19(52)"
    },
    "electronConfiguration": {
      "notation": "[Kr]5s2 4d10 5p1",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Kr]5s2 4d10 5p1.",
    "hints": [
      "A transparent, electrically conducting oxide of this metal and tin is used in touchscreens.",
      "Its name recalls the distinctive indigo line in its spectrum.",
      "Reich and Richter announced its discovery in Freiberg, Germany, in 1863."
    ]
  },
  {
    "atomicNumber": 50,
    "name": "Tin",
    "symbol": "Sn",
    "family": "Metal",
    "period": 5,
    "group": 14,
    "atomicMass": {
      "display": "118.710(7)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 120,
      "basis": "most-abundant",
      "abundance": "0.3258(9)"
    },
    "electronConfiguration": {
      "notation": "[Kr]5s2 4d10 5p2",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Kr]5s2 4d10 5p2.",
    "hints": [
      "A thin layer of this metal protects the steel used in many food cans.",
      "It combines with copper to make bronze.",
      "Flat window glass can be made by floating molten glass on a bath of this metal."
    ]
  },
  {
    "atomicNumber": 51,
    "name": "Antimony",
    "symbol": "Sb",
    "family": "Metalloid",
    "period": 5,
    "group": 15,
    "atomicMass": {
      "display": "121.760(1)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 121,
      "basis": "most-abundant",
      "abundance": "0.5721(5)"
    },
    "electronConfiguration": {
      "notation": "[Kr]5s2 4d10 5p3",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Kr]5s2 4d10 5p3.",
    "hints": [
      "This brittle, silvery material is used to harden alloys containing lead.",
      "Its compounds are used in flame-retardant materials.",
      "Its black sulfide mineral, stibnite, was used in ancient eye cosmetics."
    ]
  },
  {
    "atomicNumber": 52,
    "name": "Tellurium",
    "symbol": "Te",
    "family": "Metalloid",
    "period": 5,
    "group": 16,
    "atomicMass": {
      "display": "127.60(3)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 130,
      "basis": "most-abundant",
      "abundance": "0.3408(62)"
    },
    "electronConfiguration": {
      "notation": "[Kr]5s2 4d10 5p4",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Kr]5s2 4d10 5p4.",
    "hints": [
      "It is a brittle, metallic-looking element often supplied as a grey powder.",
      "Its compounds are used in some thin-film solar cells.",
      "Its name comes from a Latin word for Earth."
    ]
  },
  {
    "atomicNumber": 53,
    "name": "Iodine",
    "symbol": "I",
    "family": "Halogen",
    "period": 5,
    "group": 17,
    "atomicMass": {
      "display": "126.90447(3)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 127,
      "basis": "most-abundant",
      "abundance": "1"
    },
    "electronConfiguration": {
      "notation": "[Kr]5s2 4d10 5p5",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Kr]5s2 4d10 5p5.",
    "hints": [
      "Its dark crystals can give off a striking purple vapour when heated.",
      "The body needs its ions to make thyroid hormones.",
      "Bernard Courtois found it while working with seaweed ash in Paris in 1811."
    ]
  },
  {
    "atomicNumber": 54,
    "name": "Xenon",
    "symbol": "Xe",
    "family": "Noble Gas",
    "period": 5,
    "group": 18,
    "atomicMass": {
      "display": "131.293(6)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "gas",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 132,
      "basis": "most-abundant",
      "abundance": "0.269 09(55)"
    },
    "electronConfiguration": {
      "notation": "[Kr]5s2 4d10 5p6",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Kr]5s2 4d10 5p6.",
    "hints": [
      "An electrical discharge can make this otherwise colourless gas glow blue.",
      "Spacecraft can use its ions as propellant in electric thrusters.",
      "Its bright flash lamps have been used in high-speed photography."
    ]
  },
  {
    "atomicNumber": 55,
    "name": "Cesium",
    "symbol": "Cs",
    "family": "Alkali Metal",
    "period": 6,
    "group": 1,
    "atomicMass": {
      "display": "132.90545196(6)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 133,
      "basis": "most-abundant",
      "abundance": "1"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s1",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s1.",
    "hints": [
      "This soft, pale-gold metal reacts very violently with water.",
      "Transitions in one of its isotopes define the second used in precision timekeeping.",
      "Bunsen and Kirchhoff discovered it in mineral water in Heidelberg in 1860."
    ]
  },
  {
    "atomicNumber": 56,
    "name": "Barium",
    "symbol": "Ba",
    "family": "Alkaline Earth Metal",
    "period": 6,
    "group": 2,
    "atomicMass": {
      "display": "137.327(7)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 138,
      "basis": "most-abundant",
      "abundance": "0.7170(29)"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s2",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s2.",
    "hints": [
      "Its insoluble sulfate is used as a contrast material for X-rays of the digestive system.",
      "Its salts can produce green colours in fireworks.",
      "Its dense sulfate mineral is added to drilling fluids for oil and gas wells."
    ]
  },
  {
    "atomicNumber": 57,
    "name": "Lanthanum",
    "symbol": "La",
    "family": "Lanthanide",
    "period": 6,
    "group": null,
    "atomicMass": {
      "display": "138.90547(7)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 139,
      "basis": "most-abundant",
      "abundance": "0.999 1119(71)"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s2 5d1",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 5d1.",
    "hints": [
      "An alloy with nickel can store hydrogen for use as a fuel.",
      "It is one of the ingredients of the sparking alloy used in lighter flints.",
      "Carl Gustav Mosander discovered it in Stockholm in 1839."
    ]
  },
  {
    "atomicNumber": 58,
    "name": "Cerium",
    "symbol": "Ce",
    "family": "Lanthanide",
    "period": 6,
    "group": null,
    "atomicMass": {
      "display": "140.116(1)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 140,
      "basis": "most-abundant",
      "abundance": "0.884 50(51)"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s2 4f1 5d1",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f1 5d1.",
    "hints": [
      "It is a major ingredient in the alloy that produces sparks in cigarette lighters.",
      "Its oxide is used for polishing glass.",
      "It was identified independently in Sweden and Germany around 1803."
    ]
  },
  {
    "atomicNumber": 59,
    "name": "Praseodymium",
    "symbol": "Pr",
    "family": "Lanthanide",
    "period": 6,
    "group": null,
    "atomicMass": {
      "display": "140.90766(1)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 141,
      "basis": "most-abundant",
      "abundance": "1"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s2 4f3",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f3.",
    "hints": [
      "Its salts can give glass and ceramic glazes an intense yellow colour.",
      "It strengthens some magnesium alloys used in aircraft engines.",
      "Carl Auer von Welsbach separated it from the supposed element didymium in Vienna in 1885."
    ]
  },
  {
    "atomicNumber": 60,
    "name": "Neodymium",
    "symbol": "Nd",
    "family": "Lanthanide",
    "period": 6,
    "group": null,
    "atomicMass": {
      "display": "144.242(3)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 142,
      "basis": "most-abundant",
      "abundance": "0.271 52(40)"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s2 4f4",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f4.",
    "hints": [
      "An alloy with iron and boron makes very strong permanent magnets.",
      "Those magnets are useful in devices ranging from loudspeakers to wind turbines.",
      "Carl Auer von Welsbach identified it in Vienna in 1885 while separating didymium."
    ]
  },
  {
    "atomicNumber": 61,
    "name": "Promethium",
    "symbol": "Pm",
    "family": "Lanthanide",
    "period": 6,
    "group": null,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 145,
      "basis": "representative-long-lived",
      "halfLife": "17.7(4) a"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s2 4f5",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f5.",
    "hints": [
      "Every isotope of this element is radioactive.",
      "It has been used in specialised batteries powered by radioactive decay.",
      "It was isolated from reactor fission products at Oak Ridge in 1945."
    ]
  },
  {
    "atomicNumber": 62,
    "name": "Samarium",
    "symbol": "Sm",
    "family": "Lanthanide",
    "period": 6,
    "group": null,
    "atomicMass": {
      "display": "150.36(2)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 152,
      "basis": "most-abundant",
      "abundance": "0.2674(9)"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s2 4f6",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f6.",
    "hints": [
      "Its alloys with cobalt make magnets that work well at high temperatures.",
      "It can absorb neutrons, giving it a role in nuclear-reactor control.",
      "It was separated from the mineral samarskite by Lecoq de Boisbaudran in 1879."
    ]
  },
  {
    "atomicNumber": 63,
    "name": "Europium",
    "symbol": "Eu",
    "family": "Lanthanide",
    "period": 6,
    "group": null,
    "atomicMass": {
      "display": "151.964(1)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 153,
      "basis": "most-abundant",
      "abundance": "0.5219(6)"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s2 4f7",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f7.",
    "hints": [
      "Its compounds can supply red fluorescence for security printing on banknotes.",
      "It helps balance the colour of light in some energy-saving lamps.",
      "Eugene-Anatole Demarcay separated it in 1901 after repeated crystallisations of other rare-earth salts."
    ]
  },
  {
    "atomicNumber": 64,
    "name": "Gadolinium",
    "symbol": "Gd",
    "family": "Lanthanide",
    "period": 6,
    "group": null,
    "atomicMass": {
      "display": "157.249(2)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 158,
      "basis": "most-abundant",
      "abundance": "0.248 20(20)"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s2 4f7 5d1",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f7 5d1.",
    "hints": [
      "Its compounds are used as contrast agents in MRI scans.",
      "It is particularly effective at absorbing neutrons.",
      "Charles Galissard de Marignac identified it in Geneva in 1880."
    ]
  },
  {
    "atomicNumber": 65,
    "name": "Terbium",
    "symbol": "Tb",
    "family": "Lanthanide",
    "period": 6,
    "group": null,
    "atomicMass": {
      "display": "158.925354(7)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 159,
      "basis": "most-abundant",
      "abundance": "1"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s2 4f9",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f9.",
    "hints": [
      "Its compounds are used in light-emitting materials for energy-saving lamps.",
      "An alloy with dysprosium and iron changes length in a magnetic field.",
      "Carl Gustav Mosander first separated its oxide in Stockholm in 1843."
    ]
  },
  {
    "atomicNumber": 66,
    "name": "Dysprosium",
    "symbol": "Dy",
    "family": "Lanthanide",
    "period": 6,
    "group": null,
    "atomicMass": {
      "display": "162.500(1)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 164,
      "basis": "most-abundant",
      "abundance": "0.282 60(54)"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s2 4f10",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f10.",
    "hints": [
      "Adding it to powerful permanent magnets helps them resist heat-induced loss of magnetism.",
      "Its iodide can help discharge lamps produce intense white light.",
      "Lecoq de Boisbaudran discovered it in Paris in 1886."
    ]
  },
  {
    "atomicNumber": 67,
    "name": "Holmium",
    "symbol": "Ho",
    "family": "Lanthanide",
    "period": 6,
    "group": null,
    "atomicMass": {
      "display": "164.930329(5)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 165,
      "basis": "most-abundant",
      "abundance": "1"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s2 4f11",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f11.",
    "hints": [
      "This metal has a bright, silvery appearance.",
      "Its ability to absorb neutrons gives it a use in nuclear reactors.",
      "Its name is derived from the Latin name for Stockholm."
    ]
  },
  {
    "atomicNumber": 68,
    "name": "Erbium",
    "symbol": "Er",
    "family": "Lanthanide",
    "period": 6,
    "group": null,
    "atomicMass": {
      "display": "167.259(3)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 166,
      "basis": "most-abundant",
      "abundance": "0.335 03(36)"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s2 4f12",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f12.",
    "hints": [
      "Its compounds give some glass and imitation gemstones a pink tint.",
      "Doping optical fibres with this element allows telecommunications signals to be amplified.",
      "Mosander identified its pink oxide in Stockholm in 1843."
    ]
  },
  {
    "atomicNumber": 69,
    "name": "Thulium",
    "symbol": "Tm",
    "family": "Lanthanide",
    "period": 6,
    "group": null,
    "atomicMass": {
      "display": "168.934219(5)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 169,
      "basis": "most-abundant",
      "abundance": "1"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s2 4f13",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f13.",
    "hints": [
      "A radioactive isotope of this element has been used in portable X-ray sources.",
      "It is used in lasers with surgical applications.",
      "Per Teodor Cleve identified its oxide in Uppsala, Sweden, in 1879."
    ]
  },
  {
    "atomicNumber": 70,
    "name": "Ytterbium",
    "symbol": "Yb",
    "family": "Lanthanide",
    "period": 6,
    "group": null,
    "atomicMass": {
      "display": "173.045(10)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 174,
      "basis": "most-abundant",
      "abundance": "0.318 96(26)"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s2 4f14",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f14.",
    "hints": [
      "This soft, silvery metal slowly develops an oxide layer in air.",
      "It is used in some tuneable lasers.",
      "Marignac separated it from material containing erbium in Geneva in 1878."
    ]
  },
  {
    "atomicNumber": 71,
    "name": "Lutetium",
    "symbol": "Lu",
    "family": "Lanthanide",
    "period": 6,
    "group": null,
    "atomicMass": {
      "display": "174.96669(5)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 175,
      "basis": "most-abundant",
      "abundance": "0.974 14(5)"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s2 4f14 5d1",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f14 5d1.",
    "hints": [
      "This metal is silvery-white, hard and dense.",
      "It has been used as a catalyst for breaking down hydrocarbons in oil refining.",
      "Its name comes from an ancient Latin name for Paris."
    ]
  },
  {
    "atomicNumber": 72,
    "name": "Hafnium",
    "symbol": "Hf",
    "family": "Transition Metal",
    "period": 6,
    "group": 4,
    "atomicMass": {
      "display": "178.486(6)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 180,
      "basis": "most-abundant",
      "abundance": "0.3512(16)"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s2 4f14 5d2",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f14 5d2.",
    "hints": [
      "Its strong neutron absorption makes it useful for nuclear-reactor control rods.",
      "Its oxide is used as an electrical insulator in microchips.",
      "Its name comes from the Latin name for Copenhagen."
    ]
  },
  {
    "atomicNumber": 73,
    "name": "Tantalum",
    "symbol": "Ta",
    "family": "Transition Metal",
    "period": 6,
    "group": 5,
    "atomicMass": {
      "display": "180.94788(2)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 181,
      "basis": "most-abundant",
      "abundance": "0.999 8824(23)"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s2 4f14 5d3",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f14 5d3.",
    "hints": [
      "Its thin insulating oxide layer makes it valuable for compact electronic capacitors.",
      "It is used in surgical implants because body tissues tolerate it well.",
      "Anders Gustav Ekeberg reported this metal in Uppsala, Sweden, in 1802."
    ]
  },
  {
    "atomicNumber": 74,
    "name": "Tungsten",
    "symbol": "W",
    "family": "Transition Metal",
    "period": 6,
    "group": 6,
    "atomicMass": {
      "display": "183.84(1)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 184,
      "basis": "most-abundant",
      "abundance": "0.3064(2)"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s2 4f14 5d4",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f14 5d4.",
    "hints": [
      "It has the highest melting point of any metal.",
      "It supplied the glowing filaments in many traditional incandescent light bulbs.",
      "Its carbide is exceptionally hard and is used in cutting and drilling tools."
    ]
  },
  {
    "atomicNumber": 75,
    "name": "Rhenium",
    "symbol": "Re",
    "family": "Transition Metal",
    "period": 6,
    "group": 7,
    "atomicMass": {
      "display": "186.207(1)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 187,
      "basis": "most-abundant",
      "abundance": "0.6260(5)"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s2 4f14 5d5",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f14 5d5.",
    "hints": [
      "Only tungsten has a higher melting point among the metallic elements.",
      "Adding it to nickel alloys helps turbine blades withstand jet-engine temperatures.",
      "Walter Noddack and Ida Tacke isolated it in Berlin in 1925."
    ]
  },
  {
    "atomicNumber": 76,
    "name": "Osmium",
    "symbol": "Os",
    "family": "Transition Metal",
    "period": 6,
    "group": 8,
    "atomicMass": {
      "display": "190.23(3)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 192,
      "basis": "most-abundant",
      "abundance": "0.4078(32)"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s2 4f14 5d6",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f14 5d6.",
    "hints": [
      "It is the densest naturally occurring element under ordinary conditions.",
      "Its very hard alloys have been used for fountain-pen tips and instrument pivots.",
      "Smithson Tennant found it in the residue left by dissolving platinum in 1803."
    ]
  },
  {
    "atomicNumber": 77,
    "name": "Iridium",
    "symbol": "Ir",
    "family": "Transition Metal",
    "period": 6,
    "group": 9,
    "atomicMass": {
      "display": "192.217(2)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 193,
      "basis": "most-abundant",
      "abundance": "0.6277(9)"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s2 4f14 5d7",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f14 5d7.",
    "hints": [
      "This dense metal is exceptionally resistant to corrosion.",
      "It is used in some spark-plug electrodes because it withstands heat and wear.",
      "It made up ten percent of the alloy in the former international standard metre bar."
    ]
  },
  {
    "atomicNumber": 78,
    "name": "Platinum",
    "symbol": "Pt",
    "family": "Transition Metal",
    "period": 6,
    "group": 10,
    "atomicMass": {
      "display": "195.084(9)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 195,
      "basis": "most-abundant",
      "abundance": "0.337 75(240)"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s1 4f14 5d9",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s1 4f14 5d9.",
    "hints": [
      "This corrosion-resistant precious metal is widely used in jewellery.",
      "It helps catalytic converters change harmful vehicle exhaust gases into less harmful products.",
      "It is used as a catalyst to improve the performance of fuel cells."
    ]
  },
  {
    "atomicNumber": 79,
    "name": "Gold",
    "symbol": "Au",
    "family": "Transition Metal",
    "period": 6,
    "group": 11,
    "atomicMass": {
      "display": "196.966570(4)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 197,
      "basis": "most-abundant",
      "abundance": "1"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s1 4f14 5d10",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s1 4f14 5d10.",
    "hints": [
      "This soft metal has a naturally yellow appearance and resists corrosion.",
      "The 24-carat designation describes the pure form of this jewellery metal.",
      "Its resistance to corrosion makes it useful for reliable electrical contacts."
    ]
  },
  {
    "atomicNumber": 80,
    "name": "Mercury",
    "symbol": "Hg",
    "family": "Transition Metal",
    "period": 6,
    "group": 12,
    "atomicMass": {
      "display": "200.592(3)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "liquid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 202,
      "basis": "most-abundant",
      "abundance": "0.2974(13)"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s2 4f14 5d10",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f14 5d10.",
    "hints": [
      "It is a silvery metal that is liquid at ordinary room temperature.",
      "It was widely used in thermometers and barometers before less toxic alternatives became common.",
      "Its red sulfide ore, cinnabar, was used as a pigment in prehistoric cave art."
    ]
  },
  {
    "atomicNumber": 81,
    "name": "Thallium",
    "symbol": "Tl",
    "family": "Metal",
    "period": 6,
    "group": 13,
    "atomicMass": {
      "display": "[204.382,204.385]",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 205,
      "basis": "most-abundant",
      "abundance": "[0.7041, 0.7056]"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s2 4f14 5d10 6p1",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f14 5d10 6p1.",
    "hints": [
      "This soft, silvery-white metal tarnishes readily.",
      "Its sulfate was once used as a rat poison, but such household uses were banned in many countries.",
      "William Crookes recognised it from a green spectral line in 1861."
    ]
  },
  {
    "atomicNumber": 82,
    "name": "Lead",
    "symbol": "Pb",
    "family": "Metal",
    "period": 6,
    "group": 14,
    "atomicMass": {
      "display": "[206.14,207.94]",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 208,
      "basis": "variable-abundance",
      "abundance": "[0.0338, 0.9775]"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s2 4f14 5d10 6p2",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f14 5d10 6p2.",
    "hints": [
      "This dense, soft metal is easily shaped into sheets.",
      "It is still used in many rechargeable car batteries.",
      "The Romans used it extensively for water pipes."
    ]
  },
  {
    "atomicNumber": 83,
    "name": "Bismuth",
    "symbol": "Bi",
    "family": "Metal",
    "period": 6,
    "group": 15,
    "atomicMass": {
      "display": "208.98040(1)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 209,
      "basis": "most-abundant",
      "abundance": "1"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s2 4f14 5d10 6p3",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f14 5d10 6p3.",
    "hints": [
      "This brittle metal has a silvery appearance with a pinkish tinge.",
      "Its low-melting alloys have been used in fire-safety devices and electrical fuses.",
      "Its compounds can give cosmetics a pearly appearance."
    ]
  },
  {
    "atomicNumber": 84,
    "name": "Polonium",
    "symbol": "Po",
    "family": "Metal",
    "period": 6,
    "group": 16,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 209,
      "basis": "representative-long-lived",
      "halfLife": "124(3) a"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s2 4f14 5d10 6p4",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f14 5d10 6p4.",
    "hints": [
      "This highly radioactive element emits alpha particles.",
      "Its name honours Poland, Marie Curie's homeland.",
      "Marie and Pierre Curie identified it in pitchblende in 1898."
    ]
  },
  {
    "atomicNumber": 85,
    "name": "Astatine",
    "symbol": "At",
    "family": "Halogen",
    "period": 6,
    "group": 17,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "unknown",
      "certainty": "unknown"
    },
    "isotope": {
      "massNumber": 210,
      "basis": "representative-long-lived",
      "halfLife": "8.1(4) h"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s2 4f14 5d10 6p5",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f14 5d10 6p5.",
    "hints": [
      "Only tiny quantities of this intensely radioactive element have been produced.",
      "Researchers made it at Berkeley in 1940 by bombarding bismuth with alpha particles.",
      "Even its longest-lived known isotope has a half-life of only about eight hours."
    ]
  },
  {
    "atomicNumber": 86,
    "name": "Radon",
    "symbol": "Rn",
    "family": "Noble Gas",
    "period": 6,
    "group": 18,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "gas",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 222,
      "basis": "representative-long-lived",
      "halfLife": "3.8215(2) d"
    },
    "electronConfiguration": {
      "notation": "[Xe]6s2 4f14 5d10 6p6",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f14 5d10 6p6.",
    "hints": [
      "This radioactive gas has no colour or smell.",
      "It can escape from rocks and build up inside poorly ventilated buildings.",
      "It was once sealed into small tubes for use in cancer treatment."
    ]
  },
  {
    "atomicNumber": 87,
    "name": "Francium",
    "symbol": "Fr",
    "family": "Alkali Metal",
    "period": 7,
    "group": 1,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "unknown",
      "certainty": "unknown"
    },
    "isotope": {
      "massNumber": 223,
      "basis": "representative-long-lived",
      "halfLife": "22.00(7) min"
    },
    "electronConfiguration": {
      "notation": "[Rn]7s1",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Rn]7s1.",
    "hints": [
      "Marguerite Perey discovered it at the Curie Institute in Paris in 1939.",
      "Its longest-lived known isotope has a half-life of about 22 minutes.",
      "It was found by studying unexpected radioactivity in a purified actinium sample."
    ]
  },
  {
    "atomicNumber": 88,
    "name": "Radium",
    "symbol": "Ra",
    "family": "Alkaline Earth Metal",
    "period": 7,
    "group": 2,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 226,
      "basis": "representative-long-lived",
      "halfLife": "1600(7) a"
    },
    "electronConfiguration": {
      "notation": "[Rn]7s2",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Rn]7s2.",
    "hints": [
      "It was used in luminous paints on clock and watch dials.",
      "The Curies discovered it in 1898 while studying pitchblende.",
      "The freshly prepared metal is silvery, soft and strongly radioactive."
    ]
  },
  {
    "atomicNumber": 89,
    "name": "Actinium",
    "symbol": "Ac",
    "family": "Actinide",
    "period": 7,
    "group": null,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 227,
      "basis": "representative-long-lived",
      "halfLife": "21.772(3) a"
    },
    "electronConfiguration": {
      "notation": "[Rn]7s2 6d1",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 6d1.",
    "hints": [
      "Its intense radioactivity can make the surrounding air glow blue.",
      "It occurs in trace amounts in uranium ores such as pitchblende.",
      "Andre Debierne reported its discovery in Paris in 1899."
    ]
  },
  {
    "atomicNumber": 90,
    "name": "Thorium",
    "symbol": "Th",
    "family": "Actinide",
    "period": 7,
    "group": null,
    "atomicMass": {
      "display": "232.0377(4)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 232,
      "basis": "most-abundant",
      "abundance": "0.9998(2)"
    },
    "electronConfiguration": {
      "notation": "[Rn]7s2 6d2",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 6d2.",
    "hints": [
      "Its name honours the Norse god of thunder.",
      "This silvery metal is naturally radioactive.",
      "It is studied as an alternative starting material for nuclear fuel."
    ]
  },
  {
    "atomicNumber": 91,
    "name": "Protactinium",
    "symbol": "Pa",
    "family": "Actinide",
    "period": 7,
    "group": null,
    "atomicMass": {
      "display": "231.03588(1)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 231,
      "basis": "most-abundant",
      "abundance": "1"
    },
    "electronConfiguration": {
      "notation": "[Rn]7s2 5f2 6d1",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f2 6d1.",
    "hints": [
      "This rare, radioactive metal has few uses outside research.",
      "Fajans and Gohring identified a short-lived isotope of it in 1913.",
      "Lise Meitner separated a much longer-lived isotope from pitchblende in 1918."
    ]
  },
  {
    "atomicNumber": 92,
    "name": "Uranium",
    "symbol": "U",
    "family": "Actinide",
    "period": 7,
    "group": null,
    "atomicMass": {
      "display": "238.02891(3)",
      "kind": "standard-weight"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 238,
      "basis": "most-abundant",
      "abundance": "0.992 742(10)"
    },
    "electronConfiguration": {
      "notation": "[Rn]7s2 5f3 6d1",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f3 6d1.",
    "hints": [
      "An isotope of this element supplies the fission fuel in many nuclear power stations.",
      "Its compounds can give glass a yellow-green colour.",
      "Henri Becquerel discovered its radioactivity in 1896 after it affected a photographic plate."
    ]
  },
  {
    "atomicNumber": 93,
    "name": "Neptunium",
    "symbol": "Np",
    "family": "Actinide",
    "period": 7,
    "group": null,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 237,
      "basis": "representative-long-lived",
      "halfLife": "2144(7) ka"
    },
    "electronConfiguration": {
      "notation": "[Rn]7s2 5f4 6d1",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f4 6d1.",
    "hints": [
      "It was the first element beyond uranium to be produced and identified.",
      "McMillan and Abelson made it at Berkeley, California, in 1940.",
      "One of its long-lived isotopes has been used in neutron detectors."
    ]
  },
  {
    "atomicNumber": 94,
    "name": "Plutonium",
    "symbol": "Pu",
    "family": "Actinide",
    "period": 7,
    "group": null,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 244,
      "basis": "representative-long-lived",
      "halfLife": "81.3(3) Ma"
    },
    "electronConfiguration": {
      "notation": "[Rn]7s2 5f6",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f6.",
    "hints": [
      "An isotope of this element supplies heat for power systems on Mars rovers.",
      "It can serve as fuel in nuclear reactors.",
      "Researchers first produced it at Berkeley, California, in 1940."
    ]
  },
  {
    "atomicNumber": 95,
    "name": "Americium",
    "symbol": "Am",
    "family": "Actinide",
    "period": 7,
    "group": null,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 243,
      "basis": "representative-long-lived",
      "halfLife": "7.350(9) ka"
    },
    "electronConfiguration": {
      "notation": "[Rn]7s2 5f7",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f7.",
    "hints": [
      "Tiny quantities of one isotope are used in ionisation smoke alarms.",
      "It was first made by a team in Chicago in 1944.",
      "It was produced by bombarding plutonium with neutrons in a reactor."
    ]
  },
  {
    "atomicNumber": 96,
    "name": "Curium",
    "symbol": "Cm",
    "family": "Actinide",
    "period": 7,
    "group": null,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 247,
      "basis": "representative-long-lived",
      "halfLife": "15.6(5) Ma"
    },
    "electronConfiguration": {
      "notation": "[Rn]7s2 5f7 6d1",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f7 6d1.",
    "hints": [
      "Its name honours Marie and Pierre Curie.",
      "Glenn Seaborg revealed its existence on a children's radio programme in 1945.",
      "It was first made in 1944 by bombarding plutonium with alpha particles."
    ]
  },
  {
    "atomicNumber": 97,
    "name": "Berkelium",
    "symbol": "Bk",
    "family": "Actinide",
    "period": 7,
    "group": null,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 247,
      "basis": "representative-long-lived",
      "halfLife": "1.38(25) ka"
    },
    "electronConfiguration": {
      "notation": "[Rn]7s2 5f9",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f9.",
    "hints": [
      "It was first produced at Berkeley, California, in December 1949.",
      "Researchers created it by firing alpha particles at americium.",
      "It is so scarce that it has no everyday commercial use."
    ]
  },
  {
    "atomicNumber": 98,
    "name": "Californium",
    "symbol": "Cf",
    "family": "Actinide",
    "period": 7,
    "group": null,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "solid",
      "certainty": "measured"
    },
    "isotope": {
      "massNumber": 251,
      "basis": "representative-long-lived",
      "halfLife": "898(44) a"
    },
    "electronConfiguration": {
      "notation": "[Rn]7s2 5f10",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f10.",
    "hints": [
      "Its strong neutron emission is useful for investigating oil wells and mineral ores.",
      "It was first made at Berkeley in 1950 by bombarding curium with alpha particles.",
      "Its name honours the US state where it was first produced."
    ]
  },
  {
    "atomicNumber": 99,
    "name": "Einsteinium",
    "symbol": "Es",
    "family": "Actinide",
    "period": 7,
    "group": null,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "unknown",
      "certainty": "unknown"
    },
    "isotope": {
      "massNumber": 252,
      "basis": "representative-long-lived",
      "halfLife": "471.7(1.9) d"
    },
    "electronConfiguration": {
      "notation": "[Rn]7s2 5f11",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f11.",
    "hints": [
      "It was found in debris from a thermonuclear test in the Pacific in 1952.",
      "Its name honours Albert Einstein.",
      "It is produced in tiny quantities for scientific research."
    ]
  },
  {
    "atomicNumber": 100,
    "name": "Fermium",
    "symbol": "Fm",
    "family": "Actinide",
    "period": 7,
    "group": null,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "unknown",
      "certainty": "unknown"
    },
    "isotope": {
      "massNumber": 257,
      "basis": "representative-long-lived",
      "halfLife": "100.5(2) d"
    },
    "electronConfiguration": {
      "notation": "[Rn] 5f12 7s2",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Rn] 5f12 7s2.",
    "hints": [
      "It was identified in 1953 in debris from the first thermonuclear explosion.",
      "Its name honours Enrico Fermi.",
      "It is made only in minute quantities and has no uses outside research."
    ]
  },
  {
    "atomicNumber": 101,
    "name": "Mendelevium",
    "symbol": "Md",
    "family": "Actinide",
    "period": 7,
    "group": null,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "unknown",
      "certainty": "unknown"
    },
    "isotope": {
      "massNumber": 258,
      "basis": "representative-long-lived",
      "halfLife": "51.6(3) d"
    },
    "electronConfiguration": {
      "notation": "[Rn]7s2 5f13",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f13.",
    "hints": [
      "The first experiment to produce it in 1955 yielded just seventeen atoms.",
      "It was made at Berkeley by bombarding einsteinium with alpha particles.",
      "It is named after Dmitri Mendeleev, a pioneer of the periodic table."
    ]
  },
  {
    "atomicNumber": 102,
    "name": "Nobelium",
    "symbol": "No",
    "family": "Actinide",
    "period": 7,
    "group": null,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "unknown",
      "certainty": "unknown"
    },
    "isotope": {
      "massNumber": 259,
      "basis": "representative-long-lived",
      "halfLife": "58(5) min"
    },
    "electronConfiguration": {
      "notation": "[Rn]7s2 5f14",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f14.",
    "hints": [
      "It is named after Alfred Nobel.",
      "Its discovery involved competing claims from laboratories in Stockholm, Berkeley and Dubna.",
      "It is a synthetic radioactive element used only for research."
    ]
  },
  {
    "atomicNumber": 103,
    "name": "Lawrencium",
    "symbol": "Lr",
    "family": "Actinide",
    "period": 7,
    "group": null,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "unknown",
      "certainty": "unknown"
    },
    "isotope": {
      "massNumber": 266,
      "basis": "representative-long-lived",
      "halfLife": "22(14) h"
    },
    "electronConfiguration": {
      "notation": "[Rn]5f14 7s2 7p1",
      "certainty": "tabulated"
    },
    "recallClue": "Its tabulated electron configuration is [Rn]5f14 7s2 7p1.",
    "hints": [
      "Its name honours Ernest Lawrence, inventor of the cyclotron.",
      "Its discovery involved competing experiments in Berkeley and Dubna.",
      "It is a radioactive element with no applications outside research."
    ]
  },
  {
    "atomicNumber": 104,
    "name": "Rutherfordium",
    "symbol": "Rf",
    "family": "Transition Metal",
    "period": 7,
    "group": 4,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "unknown",
      "certainty": "unknown"
    },
    "isotope": {
      "massNumber": 267,
      "basis": "representative-long-lived",
      "halfLife": "2.5(1.5) h"
    },
    "electronConfiguration": {
      "notation": "[Rn]7s2 5f14 6d2",
      "certainty": "predicted"
    },
    "recallClue": "Its predicted electron configuration is [Rn]7s2 5f14 6d2.",
    "hints": [
      "It is named in honour of nuclear physicist Ernest Rutherford.",
      "Its discovery was disputed between teams in Dubna and Berkeley during the 1960s.",
      "Scientists produce it artificially for research rather than for everyday products."
    ]
  },
  {
    "atomicNumber": 105,
    "name": "Dubnium",
    "symbol": "Db",
    "family": "Transition Metal",
    "period": 7,
    "group": 5,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "unknown",
      "certainty": "unknown"
    },
    "isotope": {
      "massNumber": 268,
      "basis": "representative-long-lived",
      "halfLife": "29(3) h"
    },
    "electronConfiguration": {
      "notation": "[Rn]7s2 5f14 6d3",
      "certainty": "predicted"
    },
    "recallClue": "Its predicted electron configuration is [Rn]7s2 5f14 6d3.",
    "hints": [
      "Its name honours Dubna, the Russian town that hosts a major nuclear research institute.",
      "A Berkeley team produced it in 1970 by bombarding californium with neon.",
      "Only tiny quantities of this radioactive element have been made for research."
    ]
  },
  {
    "atomicNumber": 106,
    "name": "Seaborgium",
    "symbol": "Sg",
    "family": "Transition Metal",
    "period": 7,
    "group": 6,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "unknown",
      "certainty": "unknown"
    },
    "isotope": {
      "massNumber": 269,
      "basis": "representative-long-lived",
      "halfLife": "5(2) min"
    },
    "electronConfiguration": {
      "notation": "[Rn]7s2 5f14 6d4",
      "certainty": "predicted"
    },
    "recallClue": "Its predicted electron configuration is [Rn]7s2 5f14 6d4.",
    "hints": [
      "It honours Glenn Seaborg, who was still alive when its name was approved.",
      "A Berkeley team produced it in 1974 by bombarding californium with oxygen.",
      "It is made in particle-accelerator experiments and has no everyday applications."
    ]
  },
  {
    "atomicNumber": 107,
    "name": "Bohrium",
    "symbol": "Bh",
    "family": "Transition Metal",
    "period": 7,
    "group": 7,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "unknown",
      "certainty": "unknown"
    },
    "isotope": {
      "massNumber": 270,
      "basis": "representative-long-lived",
      "halfLife": "3.8(3.0) min"
    },
    "electronConfiguration": {
      "notation": "[Rn]7s2 5f14 6d5",
      "certainty": "predicted"
    },
    "recallClue": "Its predicted electron configuration is [Rn]7s2 5f14 6d5.",
    "hints": [
      "It is named after Niels Bohr, famous for his model of the atom.",
      "A Darmstadt team produced it in 1981 by bombarding bismuth with chromium.",
      "It is highly radioactive and is studied only in research experiments."
    ]
  },
  {
    "atomicNumber": 108,
    "name": "Hassium",
    "symbol": "Hs",
    "family": "Transition Metal",
    "period": 7,
    "group": 8,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "unknown",
      "certainty": "unknown"
    },
    "isotope": {
      "massNumber": 269,
      "basis": "representative-long-lived",
      "halfLife": "15(7) s"
    },
    "electronConfiguration": {
      "notation": "[Rn]7s2 5f14 6d6",
      "certainty": "predicted"
    },
    "recallClue": "Its predicted electron configuration is [Rn]7s2 5f14 6d6.",
    "hints": [
      "Its name comes from a Latin name for the German state of Hesse.",
      "Researchers made it at Darmstadt in 1984 by colliding iron nuclei with lead.",
      "Its atoms are created for research; no ordinary bulk sample is available."
    ]
  },
  {
    "atomicNumber": 109,
    "name": "Meitnerium",
    "symbol": "Mt",
    "family": "Transition Metal",
    "period": 7,
    "group": 9,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "unknown",
      "certainty": "unknown"
    },
    "isotope": {
      "massNumber": 277,
      "basis": "representative-long-lived",
      "halfLife": "9(6) s"
    },
    "electronConfiguration": {
      "notation": "[Rn]7s2 5f14 6d7",
      "certainty": "predicted"
    },
    "recallClue": "Its predicted electron configuration is [Rn]7s2 5f14 6d7.",
    "hints": [
      "It honours Lise Meitner, a physicist who helped explain nuclear fission.",
      "Researchers first made it at Darmstadt in 1982 using bismuth and iron.",
      "The first detected atom decayed after about five milliseconds."
    ]
  },
  {
    "atomicNumber": 110,
    "name": "Darmstadtium",
    "symbol": "Ds",
    "family": "Transition Metal",
    "period": 7,
    "group": 10,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "unknown",
      "certainty": "unknown"
    },
    "isotope": {
      "massNumber": 281,
      "basis": "representative-long-lived",
      "halfLife": "14(3) s"
    },
    "electronConfiguration": {
      "notation": "[Rn]7s2 5f14 6d8",
      "certainty": "predicted"
    },
    "recallClue": "Its predicted electron configuration is [Rn]7s2 5f14 6d8.",
    "hints": [
      "Its name honours the German city of Darmstadt.",
      "Researchers made it in 1994 by fusing nickel nuclei with lead.",
      "Its short-lived atoms are produced in accelerator experiments for research."
    ]
  },
  {
    "atomicNumber": 111,
    "name": "Roentgenium",
    "symbol": "Rg",
    "family": "Transition Metal",
    "period": 7,
    "group": 11,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "unknown",
      "certainty": "unknown"
    },
    "isotope": {
      "massNumber": 282,
      "basis": "representative-long-lived",
      "halfLife": "130(50) s"
    },
    "electronConfiguration": {
      "notation": "[Rn]7s2 5f14 6d9",
      "certainty": "predicted"
    },
    "recallClue": "Its predicted electron configuration is [Rn]7s2 5f14 6d9.",
    "hints": [
      "It honours Wilhelm Conrad Roentgen, who discovered X-rays.",
      "A Darmstadt team produced it in 1994 by bombarding bismuth with nickel.",
      "The first reported isotope survived only milliseconds before decaying."
    ]
  },
  {
    "atomicNumber": 112,
    "name": "Copernicium",
    "symbol": "Cn",
    "family": "Transition Metal",
    "period": 7,
    "group": 12,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "unknown",
      "certainty": "unknown"
    },
    "isotope": {
      "massNumber": 285,
      "basis": "representative-long-lived",
      "halfLife": "30(8) s"
    },
    "electronConfiguration": {
      "notation": "[Rn]7s2 5f14 6d10",
      "certainty": "predicted"
    },
    "recallClue": "Its predicted electron configuration is [Rn]7s2 5f14 6d10.",
    "hints": [
      "It is named after astronomer Nicolaus Copernicus.",
      "Researchers first made it at Darmstadt in 1996 by bombarding lead with zinc.",
      "It is produced in tiny quantities for research into very heavy atoms."
    ]
  },
  {
    "atomicNumber": 113,
    "name": "Nihonium",
    "symbol": "Nh",
    "family": "Metal",
    "period": 7,
    "group": 13,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "unknown",
      "certainty": "unknown"
    },
    "isotope": {
      "massNumber": 286,
      "basis": "representative-long-lived",
      "halfLife": "12(5) s"
    },
    "electronConfiguration": {
      "notation": "[Rn]5f14 6d10 7s2 7p1",
      "certainty": "predicted"
    },
    "recallClue": "Its predicted electron configuration is [Rn]5f14 6d10 7s2 7p1.",
    "hints": [
      "Its name comes from Nihon, a Japanese name for Japan.",
      "The discovery was credited to researchers at RIKEN in Japan.",
      "The successful experiments fired zinc ions at a bismuth target."
    ]
  },
  {
    "atomicNumber": 114,
    "name": "Flerovium",
    "symbol": "Fl",
    "family": "Metal",
    "period": 7,
    "group": 14,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "unknown",
      "certainty": "unknown"
    },
    "isotope": {
      "massNumber": 290,
      "basis": "representative-long-lived",
      "halfLife": "80(60) s"
    },
    "electronConfiguration": {
      "notation": "[Rn]7s2 7p2 5f14 6d10",
      "certainty": "predicted"
    },
    "recallClue": "Its predicted electron configuration is [Rn]7s2 7p2 5f14 6d10.",
    "hints": [
      "It is named after a Russian laboratory that honours physicist Georgy Flerov.",
      "It was first produced at Dubna in 1998 by firing calcium at plutonium.",
      "Only a few atoms at a time are produced, for nuclear research."
    ]
  },
  {
    "atomicNumber": 115,
    "name": "Moscovium",
    "symbol": "Mc",
    "family": "Metal",
    "period": 7,
    "group": 15,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "unknown",
      "certainty": "unknown"
    },
    "isotope": {
      "massNumber": 290,
      "basis": "representative-long-lived",
      "halfLife": "840(360) ms"
    },
    "electronConfiguration": {
      "notation": "[Rn]7s2 7p3 5f14 6d10",
      "certainty": "predicted"
    },
    "recallClue": "Its predicted electron configuration is [Rn]7s2 7p3 5f14 6d10.",
    "hints": [
      "Its name honours the Moscow region of Russia.",
      "Its discovery involved a collaboration between Russian and US laboratories.",
      "It is an artificial, highly radioactive element without everyday applications."
    ]
  },
  {
    "atomicNumber": 116,
    "name": "Livermorium",
    "symbol": "Lv",
    "family": "Metal",
    "period": 7,
    "group": 16,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "unknown",
      "certainty": "unknown"
    },
    "isotope": {
      "massNumber": 293,
      "basis": "representative-long-lived",
      "halfLife": "70(30) ms"
    },
    "electronConfiguration": {
      "notation": "[Rn]7s2 7p4 5f14 6d10",
      "certainty": "predicted"
    },
    "recallClue": "Its predicted electron configuration is [Rn]7s2 7p4 5f14 6d10.",
    "hints": [
      "It honours the Lawrence Livermore National Laboratory in California.",
      "Researchers first produced it in Russia in 2000.",
      "It can be made by colliding calcium nuclei with a curium target."
    ]
  },
  {
    "atomicNumber": 117,
    "name": "Tennessine",
    "symbol": "Ts",
    "family": "Halogen",
    "period": 7,
    "group": 17,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "unknown",
      "certainty": "unknown"
    },
    "isotope": {
      "massNumber": 294,
      "basis": "representative-long-lived",
      "halfLife": "70(30) ms"
    },
    "electronConfiguration": {
      "notation": "[Rn]7s2 7p5 5f14 6d10",
      "certainty": "predicted"
    },
    "recallClue": "Its predicted electron configuration is [Rn]7s2 7p5 5f14 6d10.",
    "hints": [
      "Its name recognises the contributions of research institutions in Tennessee.",
      "Its discovery used a berkelium target produced at Oak Ridge and bombarded with calcium.",
      "The experiments establishing its existence were carried out in Dubna in 2010."
    ]
  },
  {
    "atomicNumber": 118,
    "name": "Oganesson",
    "symbol": "Og",
    "family": "Noble Gas",
    "period": 7,
    "group": 18,
    "atomicMass": {
      "display": "Not assigned",
      "kind": "unknown"
    },
    "phase": {
      "value": "unknown",
      "certainty": "unknown"
    },
    "isotope": {
      "massNumber": 294,
      "basis": "representative-long-lived",
      "halfLife": "0.7(3) ms"
    },
    "electronConfiguration": {
      "notation": "[Rn]7s2 7p6 5f14 6d10",
      "certainty": "predicted"
    },
    "recallClue": "Its predicted electron configuration is [Rn]7s2 7p6 5f14 6d10.",
    "hints": [
      "It honours Yuri Oganessian, a researcher in very heavy atomic nuclei.",
      "Scientists have produced it by fusing calcium nuclei with californium.",
      "Only a handful of atoms have been produced, with no uses beyond research."
    ]
  }
];
if (typeof module !== "undefined") module.exports = ElementleElements;
