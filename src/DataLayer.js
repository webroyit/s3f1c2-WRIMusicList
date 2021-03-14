import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

// children is the components that is wrapped inside DataLayer
export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider value={useReducer(initialState, reducer)}>
        {children}
    </DataLayerContext.Provider>
);