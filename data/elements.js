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
      "This element belongs to the Actinide family.",
      "Look in period 7, in one of the two detached rows of the periodic table.",
      "Its tabulated electron configuration is [Rn]5f14 7s2 7p1."
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
      "This element belongs to the Transition Metal family.",
      "Look in period 7, group 4 of the periodic table.",
      "Its predicted electron configuration is [Rn]7s2 5f14 6d2."
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
      "This element belongs to the Transition Metal family.",
      "Look in period 7, group 5 of the periodic table.",
      "Its predicted electron configuration is [Rn]7s2 5f14 6d3."
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
      "This element belongs to the Transition Metal family.",
      "Look in period 7, group 6 of the periodic table.",
      "Its predicted electron configuration is [Rn]7s2 5f14 6d4."
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
      "This element belongs to the Transition Metal family.",
      "Look in period 7, group 7 of the periodic table.",
      "Its predicted electron configuration is [Rn]7s2 5f14 6d5."
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
      "This element belongs to the Transition Metal family.",
      "Look in period 7, group 8 of the periodic table.",
      "Its predicted electron configuration is [Rn]7s2 5f14 6d6."
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
      "This element belongs to the Transition Metal family.",
      "Look in period 7, group 9 of the periodic table.",
      "Its predicted electron configuration is [Rn]7s2 5f14 6d7."
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
      "This element belongs to the Transition Metal family.",
      "Look in period 7, group 10 of the periodic table.",
      "Its predicted electron configuration is [Rn]7s2 5f14 6d8."
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
      "This element belongs to the Transition Metal family.",
      "Look in period 7, group 11 of the periodic table.",
      "Its predicted electron configuration is [Rn]7s2 5f14 6d9."
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
      "This element belongs to the Transition Metal family.",
      "Look in period 7, group 12 of the periodic table.",
      "Its predicted electron configuration is [Rn]7s2 5f14 6d10."
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
      "This element belongs to the Metal family.",
      "Look in period 7, group 13 of the periodic table.",
      "Its predicted electron configuration is [Rn]5f14 6d10 7s2 7p1."
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
      "This element belongs to the Metal family.",
      "Look in period 7, group 14 of the periodic table.",
      "Its predicted electron configuration is [Rn]7s2 7p2 5f14 6d10."
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
      "This element belongs to the Metal family.",
      "Look in period 7, group 15 of the periodic table.",
      "Its predicted electron configuration is [Rn]7s2 7p3 5f14 6d10."
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
      "This element belongs to the Metal family.",
      "Look in period 7, group 16 of the periodic table.",
      "Its predicted electron configuration is [Rn]7s2 7p4 5f14 6d10."
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
      "This element belongs to the Halogen family.",
      "Look in period 7, group 17 of the periodic table.",
      "Its predicted electron configuration is [Rn]7s2 7p5 5f14 6d10."
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
      "This element belongs to the Noble Gas family.",
      "Look in period 7, group 18 of the periodic table.",
      "Its predicted electron configuration is [Rn]7s2 7p6 5f14 6d10."
    ]
  }
];
if (typeof module !== "undefined") module.exports = ElementleElements;
