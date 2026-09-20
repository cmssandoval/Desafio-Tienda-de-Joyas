import { createContext } from 'react';
import type { ApiResponse } from './JoyasContextTypes.ts';

const JoyasContext = createContext<ApiResponse | undefined>(undefined);

export default JoyasContext;