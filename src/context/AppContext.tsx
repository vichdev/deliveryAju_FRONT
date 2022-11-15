import React, { createContext, useContext, useState } from "react";
import { IAppContext } from "../models/IAppContext";

const AppContext = createContext<IAppContext>({} as IAppContext);

const Context: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebar, setSidebar] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        sidebar,
        setSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

function useApp(): IAppContext {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("o hook useApp deve ser usado como provider!");
  }
  return context;
}

export { Context, useApp };
