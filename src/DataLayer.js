import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

// children is the components that is wrapped inside DataLayer
export const DataLayer = ({ reducer, initialState, children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);

// Give access to context api
export const useDataLayerValue = () => useContext(DataLayerContext);