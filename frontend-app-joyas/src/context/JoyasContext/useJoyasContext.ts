import { useContext } from "react";
import JoyasContext from "./JoyasContext";

const useJoyasContext = () => {
  const context = useContext(JoyasContext);
  if (!context) throw new Error('useJoyasContext debe usarse dentro de JoyasProvider');
  return context;
};

export default useJoyasContext;