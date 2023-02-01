import { createContext, ReactNode, useState } from "react";

type AppContextState = { auth: string | boolean, coordinates: { lat: number, lng: number }, address: any };

const appCtxDefaultValue = {
  state: { auth: localStorage.getItem("jwt") || false, coordinates: { lat: 0, lng: 0 }, address: null },
  setState: (state: AppContextState) => { },
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
