import { createContext } from "react";
import type { ApiResponse } from "./JoyasContextTypes";

const JoyasContext = createContext<ApiResponse | undefined>(undefined);

export default JoyasContext;