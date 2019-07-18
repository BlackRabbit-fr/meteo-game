import React from "react";

export const Store = React.createContext();

const initialState = {
  isFlipped: false,
  meteos: [],
  cities: [
    "Tokyo",
    "Paris",
    "Mexico",
    "Taipei",
    "Istanbul",
    "Sao Paulo",
    "London",
    "New York",
    "Hawaii",
    "Moscow",
    "Ha Noi",
    "Lisbon",
    "Marrakesh",
    "Singapore",
    "Toronto",
    "Reykjavik",
    "Melbourne",
    "Seoul"
  ],
  foundCities: [],
  failMessage: ""
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, meteos: action.payload };
    case "FAIL":
      return {
        ...state,
        failMessage: "Try again !"
      };
    case "FOUND_CITY":
      return {
        ...state,
        foundCities: [...state.foundCities, action.payload]
      };
    case "SET_FLIPPED":
      return {
        ...state,
        isFlipped: action.payload
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
