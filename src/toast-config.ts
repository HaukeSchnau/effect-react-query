import { createContext, useContext } from "react";

export const ToastConfigContext = createContext({
	toast: {
		success: (message: string) => {
			console.log("success", message);
		},
		error: (message: string) => {
			console.log("error", message);
		},
	},
});

export const useToastConfig = () => useContext(ToastConfigContext);
