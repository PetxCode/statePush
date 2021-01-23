import React, { useReducer, useEffect, createContext } from "react";
import AppReducer from "./AppReducer";
import { v4 as uuid } from "uuid";
const initialState = {
  teams: [
    { id: uuid(), name: "Peter" },
    { id: uuid(), name: "Bukky" },
    { id: uuid(), name: "Ubani" },
    { id: uuid(), name: "Ndidi" },
    { id: uuid(), name: "Joshua" },
    { id: uuid(), name: "Ola" },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Removal Action
  const removeTeam = (id) => {
    dispatch({
      type: "REMOVE_TEAM",
      payload: id,
    });
  };

  //Add team Action

  const addTeam = (team) => {
    dispatch({
      type: "ADD_TEAM",
      payload: team,
    });
  };

  const editTeam = (team) => {
    dispatch({
      type: "EDIT_TEAM",
      payload: team,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        teams: state.teams,
        removeTeam,
        addTeam,
        editTeam,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
