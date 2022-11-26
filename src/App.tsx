import React, { useEffect } from "react";
import { Context } from "./context/AppContext";
import { GlobalStyles } from "./styles/GlobalStyles";
import { useLocation } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes/AppRoutes";

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Context>
      <GlobalStyles />
      <AppRoutes />
    </Context>
  );
};

export default App;
