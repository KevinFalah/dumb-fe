import { createContext, useReducer, useState } from "react";

export const UserContext = createContext();


const initialState = {
  isLogin: false,
  isAdmin: false,
  user: {},
};

function reducer(state, action) {
  const { type, payload } = action;


  switch (type) {
    case "AUTH_SUCCESS":
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", payload.token);
      console.log("in user context");
      console.log("payload", payload);
      console.log("role", payload.role);
      console.log("is admin", payload.role === "admin" ? true : false);
      return {
        isLogin: true,
        isAdmin: payload.role === "admin",
        user: payload,
      };
    case "AUTH_ERROR":
    case "LOGOUT_SUCCESS":
      localStorage.removeItem("token");
      return {
        isLogin: false,
        isAdmin: false,
        user: {},
      };
    default:
      throw new Error();
  }
}

export function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
}
