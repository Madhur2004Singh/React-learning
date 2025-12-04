import { createContext,useContext } from "react";

export const ThemeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},
});

export const ThemeProvider=ThemeContext.Provider;

export default function useTheme() {// Here through this function we are trying to remove the use of writing useContext whereever we want to access the global variable/Context API.We will just have to mention this function.
    return useContext(ThemeContext);
}


/* Earlier we used to do contest creation and context provider seperately now here we have created the context,context provider and a hook to directly provide access tot he Context API. */