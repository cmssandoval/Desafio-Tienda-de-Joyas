import { createContext } from "react";
import type { ApiResponse } from "./types";

const JoyasContext = createContext<ApiResponse | undefined>(undefined);

export default JoyasContext;