import React, { useState } from "react";
import DarkThemeContext from "./darkThemeContext";

const DarkThemeContextProvider= ({children})=>{

    const [darkMode,setDarkMode]=useState(true);


    return (
        <DarkThemeContext.Provider value={{darkMode,setDarkMode}}>
            {
                children
            }
        </DarkThemeContext.Provider>
    )

    
}
export default DarkThemeContextProvider;