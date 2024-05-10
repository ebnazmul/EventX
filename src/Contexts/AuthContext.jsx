import { createContext } from "react";

export const AuthContexts = createContext();

// eslint-disable-next-line react/prop-types
const AuthContext = ({ children }) => {
  return <AuthContexts.Provider value={"hh"}>{children}</AuthContexts.Provider>;
};

export default AuthContext;
