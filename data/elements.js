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
    "recallClue": "Its tabulated electron configuration is 1s1.",
    "hints": [
      "This element belongs to the Nonmetal family.",
      "Look in period 1, group 1 of the periodic table.",
      "Its tabulated electron configuration is 1s1."
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
    "recallClue": "Its tabulated electron configuration is 1s2.",
    "hints": [
      "This element belongs to the Noble Gas family.",
      "Look in period 1, group 18 of the periodic table.",
      "Its tabulated electron configuration is 1s2."
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
    "recallClue": "Its tabulated electron configuration is [He]2s1.",
    "hints": [
      "This element belongs to the Alkali Metal family.",
      "Look in period 2, group 1 of the periodic table.",
      "Its tabulated electron configuration is [He]2s1."
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
    "recallClue": "Its tabulated electron configuration is [He]2s2.",
    "hints": [
      "This element belongs to the Alkaline Earth Metal family.",
      "Look in period 2, group 2 of the periodic table.",
      "Its tabulated electron configuration is [He]2s2."
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
    "recallClue": "Its tabulated electron configuration is [He]2s2 2p1.",
    "hints": [
      "This element belongs to the Metalloid family.",
      "Look in period 2, group 13 of the periodic table.",
      "Its tabulated electron configuration is [He]2s2 2p1."
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
    "recallClue": "Its tabulated electron configuration is [He]2s2 2p2.",
    "hints": [
      "This element belongs to the Nonmetal family.",
      "Look in period 2, group 14 of the periodic table.",
      "Its tabulated electron configuration is [He]2s2 2p2."
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
    "recallClue": "Its tabulated electron configuration is [He] 2s2 2p3.",
    "hints": [
      "This element belongs to the Nonmetal family.",
      "Look in period 2, group 15 of the periodic table.",
      "Its tabulated electron configuration is [He] 2s2 2p3."
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
    "recallClue": "Its tabulated electron configuration is [He]2s2 2p4.",
    "hints": [
      "This element belongs to the Nonmetal family.",
      "Look in period 2, group 16 of the periodic table.",
      "Its tabulated electron configuration is [He]2s2 2p4."
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
    "recallClue": "Its tabulated electron configuration is [He]2s2 2p5.",
    "hints": [
      "This element belongs to the Halogen family.",
      "Look in period 2, group 17 of the periodic table.",
      "Its tabulated electron configuration is [He]2s2 2p5."
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
    "recallClue": "Its tabulated electron configuration is [He]2s2 2p6.",
    "hints": [
      "This element belongs to the Noble Gas family.",
      "Look in period 2, group 18 of the periodic table.",
      "Its tabulated electron configuration is [He]2s2 2p6."
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
    "recallClue": "Its tabulated electron configuration is [Ne]3s1.",
    "hints": [
      "This element belongs to the Alkali Metal family.",
      "Look in period 3, group 1 of the periodic table.",
      "Its tabulated electron configuration is [Ne]3s1."
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
    "recallClue": "Its tabulated electron configuration is [Ne]3s2.",
    "hints": [
      "This element belongs to the Alkaline Earth Metal family.",
      "Look in period 3, group 2 of the periodic table.",
      "Its tabulated electron configuration is [Ne]3s2."
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
    "recallClue": "Its tabulated electron configuration is [Ne]3s2 3p1.",
    "hints": [
      "This element belongs to the Metal family.",
      "Look in period 3, group 13 of the periodic table.",
      "Its tabulated electron configuration is [Ne]3s2 3p1."
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
    "recallClue": "Its tabulated electron configuration is [Ne]3s2 3p2.",
    "hints": [
      "This element belongs to the Metalloid family.",
      "Look in period 3, group 14 of the periodic table.",
      "Its tabulated electron configuration is [Ne]3s2 3p2."
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
    "recallClue": "Its tabulated electron configuration is [Ne]3s2 3p3.",
    "hints": [
      "This element belongs to the Nonmetal family.",
      "Look in period 3, group 15 of the periodic table.",
      "Its tabulated electron configuration is [Ne]3s2 3p3."
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
    "recallClue": "Its tabulated electron configuration is [Ne]3s2 3p4.",
    "hints": [
      "This element belongs to the Nonmetal family.",
      "Look in period 3, group 16 of the periodic table.",
      "Its tabulated electron configuration is [Ne]3s2 3p4."
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
    "recallClue": "Its tabulated electron configuration is [Ne]3s2 3p5.",
    "hints": [
      "This element belongs to the Halogen family.",
      "Look in period 3, group 17 of the periodic table.",
      "Its tabulated electron configuration is [Ne]3s2 3p5."
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
    "recallClue": "Its tabulated electron configuration is [Ne]3s2 3p6.",
    "hints": [
      "This element belongs to the Noble Gas family.",
      "Look in period 3, group 18 of the periodic table.",
      "Its tabulated electron configuration is [Ne]3s2 3p6."
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
    "recallClue": "Its tabulated electron configuration is [Ar]4s1.",
    "hints": [
      "This element belongs to the Alkali Metal family.",
      "Look in period 4, group 1 of the periodic table.",
      "Its tabulated electron configuration is [Ar]4s1."
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
    "recallClue": "Its tabulated electron configuration is [Ar]4s2.",
    "hints": [
      "This element belongs to the Alkaline Earth Metal family.",
      "Look in period 4, group 2 of the periodic table.",
      "Its tabulated electron configuration is [Ar]4s2."
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
    "recallClue": "Its tabulated electron configuration is [Ar]4s2 3d1.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 4, group 3 of the periodic table.",
      "Its tabulated electron configuration is [Ar]4s2 3d1."
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
    "recallClue": "Its tabulated electron configuration is [Ar]4s2 3d2.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 4, group 4 of the periodic table.",
      "Its tabulated electron configuration is [Ar]4s2 3d2."
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
    "recallClue": "Its tabulated electron configuration is [Ar]4s2 3d3.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 4, group 5 of the periodic table.",
      "Its tabulated electron configuration is [Ar]4s2 3d3."
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
    "recallClue": "Its tabulated electron configuration is [Ar]3d5 4s1.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 4, group 6 of the periodic table.",
      "Its tabulated electron configuration is [Ar]3d5 4s1."
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
    "recallClue": "Its tabulated electron configuration is [Ar]4s2 3d5.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 4, group 7 of the periodic table.",
      "Its tabulated electron configuration is [Ar]4s2 3d5."
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
    "recallClue": "Its tabulated electron configuration is [Ar]4s2 3d6.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 4, group 8 of the periodic table.",
      "Its tabulated electron configuration is [Ar]4s2 3d6."
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
    "recallClue": "Its tabulated electron configuration is [Ar]4s2 3d7.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 4, group 9 of the periodic table.",
      "Its tabulated electron configuration is [Ar]4s2 3d7."
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
    "recallClue": "Its tabulated electron configuration is [Ar]4s2 3d8.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 4, group 10 of the periodic table.",
      "Its tabulated electron configuration is [Ar]4s2 3d8."
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
    "recallClue": "Its tabulated electron configuration is [Ar]4s1 3d10.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 4, group 11 of the periodic table.",
      "Its tabulated electron configuration is [Ar]4s1 3d10."
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
    "recallClue": "Its tabulated electron configuration is [Ar]4s2 3d10.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 4, group 12 of the periodic table.",
      "Its tabulated electron configuration is [Ar]4s2 3d10."
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
    "recallClue": "Its tabulated electron configuration is [Ar]4s2 3d10 4p1.",
    "hints": [
      "This element belongs to the Metal family.",
      "Look in period 4, group 13 of the periodic table.",
      "Its tabulated electron configuration is [Ar]4s2 3d10 4p1."
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
    "recallClue": "Its tabulated electron configuration is [Ar]4s2 3d10 4p2.",
    "hints": [
      "This element belongs to the Metalloid family.",
      "Look in period 4, group 14 of the periodic table.",
      "Its tabulated electron configuration is [Ar]4s2 3d10 4p2."
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
    "recallClue": "Its tabulated electron configuration is [Ar]4s2 3d10 4p3.",
    "hints": [
      "This element belongs to the Metalloid family.",
      "Look in period 4, group 15 of the periodic table.",
      "Its tabulated electron configuration is [Ar]4s2 3d10 4p3."
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
    "recallClue": "Its tabulated electron configuration is [Ar]4s2 3d10 4p4.",
    "hints": [
      "This element belongs to the Nonmetal family.",
      "Look in period 4, group 16 of the periodic table.",
      "Its tabulated electron configuration is [Ar]4s2 3d10 4p4."
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
    "recallClue": "Its tabulated electron configuration is [Ar]4s2 3d10 4p5.",
    "hints": [
      "This element belongs to the Halogen family.",
      "Look in period 4, group 17 of the periodic table.",
      "Its tabulated electron configuration is [Ar]4s2 3d10 4p5."
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
    "recallClue": "Its tabulated electron configuration is [Ar]4s2 3d10 4p6.",
    "hints": [
      "This element belongs to the Noble Gas family.",
      "Look in period 4, group 18 of the periodic table.",
      "Its tabulated electron configuration is [Ar]4s2 3d10 4p6."
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
    "recallClue": "Its tabulated electron configuration is [Kr]5s1.",
    "hints": [
      "This element belongs to the Alkali Metal family.",
      "Look in period 5, group 1 of the periodic table.",
      "Its tabulated electron configuration is [Kr]5s1."
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
    "recallClue": "Its tabulated electron configuration is [Kr]5s2.",
    "hints": [
      "This element belongs to the Alkaline Earth Metal family.",
      "Look in period 5, group 2 of the periodic table.",
      "Its tabulated electron configuration is [Kr]5s2."
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
    "recallClue": "Its tabulated electron configuration is [Kr]5s2 4d1.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 5, group 3 of the periodic table.",
      "Its tabulated electron configuration is [Kr]5s2 4d1."
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
    "recallClue": "Its tabulated electron configuration is [Kr]5s2 4d2.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 5, group 4 of the periodic table.",
      "Its tabulated electron configuration is [Kr]5s2 4d2."
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
    "recallClue": "Its tabulated electron configuration is [Kr]5s1 4d4.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 5, group 5 of the periodic table.",
      "Its tabulated electron configuration is [Kr]5s1 4d4."
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
    "recallClue": "Its tabulated electron configuration is [Kr]5s1 4d5.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 5, group 6 of the periodic table.",
      "Its tabulated electron configuration is [Kr]5s1 4d5."
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
    "recallClue": "Its tabulated electron configuration is [Kr]5s2 4d5.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 5, group 7 of the periodic table.",
      "Its tabulated electron configuration is [Kr]5s2 4d5."
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
    "recallClue": "Its tabulated electron configuration is [Kr]5s1 4d7.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 5, group 8 of the periodic table.",
      "Its tabulated electron configuration is [Kr]5s1 4d7."
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
    "recallClue": "Its tabulated electron configuration is [Kr]5s1 4d8.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 5, group 9 of the periodic table.",
      "Its tabulated electron configuration is [Kr]5s1 4d8."
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
    "recallClue": "Its tabulated electron configuration is [Kr]4d10.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 5, group 10 of the periodic table.",
      "Its tabulated electron configuration is [Kr]4d10."
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
    "recallClue": "Its tabulated electron configuration is [Kr]5s1 4d10.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 5, group 11 of the periodic table.",
      "Its tabulated electron configuration is [Kr]5s1 4d10."
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
    "recallClue": "Its tabulated electron configuration is [Kr]5s2 4d10.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 5, group 12 of the periodic table.",
      "Its tabulated electron configuration is [Kr]5s2 4d10."
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
    "recallClue": "Its tabulated electron configuration is [Kr]5s2 4d10 5p1.",
    "hints": [
      "This element belongs to the Metal family.",
      "Look in period 5, group 13 of the periodic table.",
      "Its tabulated electron configuration is [Kr]5s2 4d10 5p1."
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
    "recallClue": "Its tabulated electron configuration is [Kr]5s2 4d10 5p2.",
    "hints": [
      "This element belongs to the Metal family.",
      "Look in period 5, group 14 of the periodic table.",
      "Its tabulated electron configuration is [Kr]5s2 4d10 5p2."
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
    "recallClue": "Its tabulated electron configuration is [Kr]5s2 4d10 5p3.",
    "hints": [
      "This element belongs to the Metalloid family.",
      "Look in period 5, group 15 of the periodic table.",
      "Its tabulated electron configuration is [Kr]5s2 4d10 5p3."
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
    "recallClue": "Its tabulated electron configuration is [Kr]5s2 4d10 5p4.",
    "hints": [
      "This element belongs to the Metalloid family.",
      "Look in period 5, group 16 of the periodic table.",
      "Its tabulated electron configuration is [Kr]5s2 4d10 5p4."
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
    "recallClue": "Its tabulated electron configuration is [Kr]5s2 4d10 5p5.",
    "hints": [
      "This element belongs to the Halogen family.",
      "Look in period 5, group 17 of the periodic table.",
      "Its tabulated electron configuration is [Kr]5s2 4d10 5p5."
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
    "recallClue": "Its tabulated electron configuration is [Kr]5s2 4d10 5p6.",
    "hints": [
      "This element belongs to the Noble Gas family.",
      "Look in period 5, group 18 of the periodic table.",
      "Its tabulated electron configuration is [Kr]5s2 4d10 5p6."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s1.",
    "hints": [
      "This element belongs to the Alkali Metal family.",
      "Look in period 6, group 1 of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s1."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s2.",
    "hints": [
      "This element belongs to the Alkaline Earth Metal family.",
      "Look in period 6, group 2 of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s2."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 5d1.",
    "hints": [
      "This element belongs to the Lanthanide family.",
      "Look in period 6, in one of the two detached rows of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s2 5d1."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f1 5d1.",
    "hints": [
      "This element belongs to the Lanthanide family.",
      "Look in period 6, in one of the two detached rows of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s2 4f1 5d1."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f3.",
    "hints": [
      "This element belongs to the Lanthanide family.",
      "Look in period 6, in one of the two detached rows of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s2 4f3."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f4.",
    "hints": [
      "This element belongs to the Lanthanide family.",
      "Look in period 6, in one of the two detached rows of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s2 4f4."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f5.",
    "hints": [
      "This element belongs to the Lanthanide family.",
      "Look in period 6, in one of the two detached rows of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s2 4f5."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f6.",
    "hints": [
      "This element belongs to the Lanthanide family.",
      "Look in period 6, in one of the two detached rows of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s2 4f6."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f7.",
    "hints": [
      "This element belongs to the Lanthanide family.",
      "Look in period 6, in one of the two detached rows of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s2 4f7."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f7 5d1.",
    "hints": [
      "This element belongs to the Lanthanide family.",
      "Look in period 6, in one of the two detached rows of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s2 4f7 5d1."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f9.",
    "hints": [
      "This element belongs to the Lanthanide family.",
      "Look in period 6, in one of the two detached rows of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s2 4f9."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f10.",
    "hints": [
      "This element belongs to the Lanthanide family.",
      "Look in period 6, in one of the two detached rows of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s2 4f10."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f11.",
    "hints": [
      "This element belongs to the Lanthanide family.",
      "Look in period 6, in one of the two detached rows of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s2 4f11."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f12.",
    "hints": [
      "This element belongs to the Lanthanide family.",
      "Look in period 6, in one of the two detached rows of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s2 4f12."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f13.",
    "hints": [
      "This element belongs to the Lanthanide family.",
      "Look in period 6, in one of the two detached rows of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s2 4f13."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f14.",
    "hints": [
      "This element belongs to the Lanthanide family.",
      "Look in period 6, in one of the two detached rows of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s2 4f14."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f14 5d1.",
    "hints": [
      "This element belongs to the Lanthanide family.",
      "Look in period 6, in one of the two detached rows of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s2 4f14 5d1."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f14 5d2.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 6, group 4 of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s2 4f14 5d2."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f14 5d3.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 6, group 5 of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s2 4f14 5d3."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f14 5d4.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 6, group 6 of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s2 4f14 5d4."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f14 5d5.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 6, group 7 of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s2 4f14 5d5."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f14 5d6.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 6, group 8 of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s2 4f14 5d6."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f14 5d7.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 6, group 9 of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s2 4f14 5d7."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s1 4f14 5d9.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 6, group 10 of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s1 4f14 5d9."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s1 4f14 5d10.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 6, group 11 of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s1 4f14 5d10."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f14 5d10.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 6, group 12 of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s2 4f14 5d10."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f14 5d10 6p1.",
    "hints": [
      "This element belongs to the Metal family.",
      "Look in period 6, group 13 of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s2 4f14 5d10 6p1."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f14 5d10 6p2.",
    "hints": [
      "This element belongs to the Metal family.",
      "Look in period 6, group 14 of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s2 4f14 5d10 6p2."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f14 5d10 6p3.",
    "hints": [
      "This element belongs to the Metal family.",
      "Look in period 6, group 15 of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s2 4f14 5d10 6p3."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f14 5d10 6p4.",
    "hints": [
      "This element belongs to the Metal family.",
      "Look in period 6, group 16 of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s2 4f14 5d10 6p4."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f14 5d10 6p5.",
    "hints": [
      "This element belongs to the Halogen family.",
      "Look in period 6, group 17 of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s2 4f14 5d10 6p5."
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
    "recallClue": "Its tabulated electron configuration is [Xe]6s2 4f14 5d10 6p6.",
    "hints": [
      "This element belongs to the Noble Gas family.",
      "Look in period 6, group 18 of the periodic table.",
      "Its tabulated electron configuration is [Xe]6s2 4f14 5d10 6p6."
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
    "recallClue": "Its tabulated electron configuration is [Rn]7s1.",
    "hints": [
      "This element belongs to the Alkali Metal family.",
      "Look in period 7, group 1 of the periodic table.",
      "Its tabulated electron configuration is [Rn]7s1."
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
    "recallClue": "Its tabulated electron configuration is [Rn]7s2.",
    "hints": [
      "This element belongs to the Alkaline Earth Metal family.",
      "Look in period 7, group 2 of the periodic table.",
      "Its tabulated electron configuration is [Rn]7s2."
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
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 6d1.",
    "hints": [
      "This element belongs to the Actinide family.",
      "Look in period 7, in one of the two detached rows of the periodic table.",
      "Its tabulated electron configuration is [Rn]7s2 6d1."
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
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 6d2.",
    "hints": [
      "This element belongs to the Actinide family.",
      "Look in period 7, in one of the two detached rows of the periodic table.",
      "Its tabulated electron configuration is [Rn]7s2 6d2."
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
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f2 6d1.",
    "hints": [
      "This element belongs to the Actinide family.",
      "Look in period 7, in one of the two detached rows of the periodic table.",
      "Its tabulated electron configuration is [Rn]7s2 5f2 6d1."
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
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f3 6d1.",
    "hints": [
      "This element belongs to the Actinide family.",
      "Look in period 7, in one of the two detached rows of the periodic table.",
      "Its tabulated electron configuration is [Rn]7s2 5f3 6d1."
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
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f4 6d1.",
    "hints": [
      "This element belongs to the Actinide family.",
      "Look in period 7, in one of the two detached rows of the periodic table.",
      "Its tabulated electron configuration is [Rn]7s2 5f4 6d1."
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
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f6.",
    "hints": [
      "This element belongs to the Actinide family.",
      "Look in period 7, in one of the two detached rows of the periodic table.",
      "Its tabulated electron configuration is [Rn]7s2 5f6."
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
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f7.",
    "hints": [
      "This element belongs to the Actinide family.",
      "Look in period 7, in one of the two detached rows of the periodic table.",
      "Its tabulated electron configuration is [Rn]7s2 5f7."
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
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f7 6d1.",
    "hints": [
      "This element belongs to the Actinide family.",
      "Look in period 7, in one of the two detached rows of the periodic table.",
      "Its tabulated electron configuration is [Rn]7s2 5f7 6d1."
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
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f9.",
    "hints": [
      "This element belongs to the Actinide family.",
      "Look in period 7, in one of the two detached rows of the periodic table.",
      "Its tabulated electron configuration is [Rn]7s2 5f9."
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
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f10.",
    "hints": [
      "This element belongs to the Actinide family.",
      "Look in period 7, in one of the two detached rows of the periodic table.",
      "Its tabulated electron configuration is [Rn]7s2 5f10."
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
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f11.",
    "hints": [
      "This element belongs to the Actinide family.",
      "Look in period 7, in one of the two detached rows of the periodic table.",
      "Its tabulated electron configuration is [Rn]7s2 5f11."
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
    "recallClue": "Its tabulated electron configuration is [Rn] 5f12 7s2.",
    "hints": [
      "This element belongs to the Actinide family.",
      "Look in period 7, in one of the two detached rows of the periodic table.",
      "Its tabulated electron configuration is [Rn] 5f12 7s2."
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
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f13.",
    "hints": [
      "This element belongs to the Actinide family.",
      "Look in period 7, in one of the two detached rows of the periodic table.",
      "Its tabulated electron configuration is [Rn]7s2 5f13."
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
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f14.",
    "hints": [
      "This element belongs to the Actinide family.",
      "Look in period 7, in one of the two detached rows of the periodic table.",
      "Its tabulated electron configuration is [Rn]7s2 5f14."
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
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f14 6d1.",
    "hints": [
      "This element belongs to the Actinide family.",
      "Look in period 7, in one of the two detached rows of the periodic table.",
      "Its tabulated electron configuration is [Rn]7s2 5f14 6d1."
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
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f14 6d2.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 7, group 4 of the periodic table.",
      "Its tabulated electron configuration is [Rn]7s2 5f14 6d2."
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
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f14 6d3.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 7, group 5 of the periodic table.",
      "Its tabulated electron configuration is [Rn]7s2 5f14 6d3."
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
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f14 6d4.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 7, group 6 of the periodic table.",
      "Its tabulated electron configuration is [Rn]7s2 5f14 6d4."
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
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f14 6d5.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 7, group 7 of the periodic table.",
      "Its tabulated electron configuration is [Rn]7s2 5f14 6d5."
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
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f14 6d6.",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 7, group 8 of the periodic table.",
      "Its tabulated electron configuration is [Rn]7s2 5f14 6d6."
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
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f14 6d7 (calculated).",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 7, group 9 of the periodic table.",
      "Its tabulated electron configuration is [Rn]7s2 5f14 6d7 (calculated)."
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
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f14 6d8 (predicted).",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 7, group 10 of the periodic table.",
      "Its tabulated electron configuration is [Rn]7s2 5f14 6d8 (predicted)."
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
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f14 6d9 (predicted).",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 7, group 11 of the periodic table.",
      "Its tabulated electron configuration is [Rn]7s2 5f14 6d9 (predicted)."
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
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 5f14 6d10 (predicted).",
    "hints": [
      "This element belongs to the Transition Metal family.",
      "Look in period 7, group 12 of the periodic table.",
      "Its tabulated electron configuration is [Rn]7s2 5f14 6d10 (predicted)."
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
    "recallClue": "Its tabulated electron configuration is [Rn]5f14 6d10 7s2 7p1 (predicted).",
    "hints": [
      "This element belongs to the Metal family.",
      "Look in period 7, group 13 of the periodic table.",
      "Its tabulated electron configuration is [Rn]5f14 6d10 7s2 7p1 (predicted)."
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
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 7p2 5f14 6d10 (predicted).",
    "hints": [
      "This element belongs to the Metal family.",
      "Look in period 7, group 14 of the periodic table.",
      "Its tabulated electron configuration is [Rn]7s2 7p2 5f14 6d10 (predicted)."
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
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 7p3 5f14 6d10 (predicted).",
    "hints": [
      "This element belongs to the Metal family.",
      "Look in period 7, group 15 of the periodic table.",
      "Its tabulated electron configuration is [Rn]7s2 7p3 5f14 6d10 (predicted)."
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
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 7p4 5f14 6d10 (predicted).",
    "hints": [
      "This element belongs to the Metal family.",
      "Look in period 7, group 16 of the periodic table.",
      "Its tabulated electron configuration is [Rn]7s2 7p4 5f14 6d10 (predicted)."
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
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 7p5 5f14 6d10 (predicted).",
    "hints": [
      "This element belongs to the Halogen family.",
      "Look in period 7, group 17 of the periodic table.",
      "Its tabulated electron configuration is [Rn]7s2 7p5 5f14 6d10 (predicted)."
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
    "recallClue": "Its tabulated electron configuration is [Rn]7s2 7p6 5f14 6d10 (predicted).",
    "hints": [
      "This element belongs to the Noble Gas family.",
      "Look in period 7, group 18 of the periodic table.",
      "Its tabulated electron configuration is [Rn]7s2 7p6 5f14 6d10 (predicted)."
    ]
  }
];
if (typeof module !== "undefined") module.exports = ElementleElements;
