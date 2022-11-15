import React from "react";
import { Context } from "./context/AppContext";
import { GlobalStyles } from "./styles/GlobalStyles";
import Home from "./views/Home";

const App: React.FC = () => {
  return (
    <Context>
      <GlobalStyles />
      <Home />
    </Context>
  );
};

export default App;
