export const URL_COMMON = "https://rickandmortyapi.com/api/";
export const URL_ADDITIONAL_CHARACTER = "character/";
export const URL_ADDITIONAL_LOCATION = "location/";

export const URL_NAVIGATE_CHARACTER = "/Character/";

export const GENDER_CHECKBOX = [
  {
    id: 0,
    label: "Any gender",
    value: "any",
  },
  {
    id: 1,
    label: "Male",
    value: "male",
  },
  {
    id: 2,
    label: "Female",
    value: "female",
  },
  {
    id: 3,
    label: "Genderless",
    value: "genderless",
  },
  {
    id: 4,
    label: "Unknown",
    value: "unknown",
  },
];

export const SEARCH_PROPERTIES = [
  {"title":"name","additional":""},
  {"title":"status","additional":""},
  {"title":"species","additional":""},
  {"title":"type","additional":""},
  {"title":"origin", "additional":"name"},
  {"title":"location", "additional":"name"}
];
