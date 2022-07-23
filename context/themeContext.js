import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const MyThemeContextProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const MyThemeContext = () => useContext(StateContext);
