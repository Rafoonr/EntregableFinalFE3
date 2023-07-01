import React, { createContext, useEffect, useReducer } from "react";

const initialState = {
  theme: "light",
  data: [],
  loading: true,
  error: null,
};

export const ContextGlobal = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      }
    default:
      return state;
  }
}

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        dispatch({ type: "SET_DATA", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "SET_ERROR", payload: error.message });
      });
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
