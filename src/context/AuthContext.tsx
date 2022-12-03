import { createContext, ReactNode, useState } from "react";

type AppContextState = { auth: string | false };

const appCtxDefaultValue = {
  state: { auth: localStorage.getItem("jwt") || false },
  setState: (state: AppContextState) => {},
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext(appCtxDefaultValue);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, setState] = useState(appCtxDefaultValue.state);

  return (
    <AuthContext.Provider value={{ state, setState }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
