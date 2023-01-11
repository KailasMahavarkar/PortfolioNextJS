import { createContext } from "react";

export type customContextType = {
	width: number;
};

const CustomContext = createContext<customContextType>({
	width: 0,
});

export default CustomContext;
