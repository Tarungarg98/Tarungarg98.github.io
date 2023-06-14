import React, { createContext, useReducer } from "react";

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_BLOG":
      action.type = "DONE";
      if (state.show_blog === 1) {
        state.show_blog = 0;
      } else {
        state.show_blog = 1;
      }
      return {
        ...state,
      };

    default:
      return state;
  }
};

// 1. Sets the initial state when the app loads
const initialState = {
  show_blog: 0,
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
  // 4. Sets up the app state. takes a reducer, and an initial state
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        show_blog: state.show_blog,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
