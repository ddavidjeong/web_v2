import React, {createContext, useContext, useState, useEffect, ReactNode } from 'react';

type DarkModeContextType = {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined> (undefined);

export const DarkModeProvider:React.FC<{children: ReactNode}> = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(isSystemDark);
}, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        console.log("darkmode");
    };

    return(
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            <div className= {darkMode ? "dark": ""}>
            { children }
            </div>
        </DarkModeContext.Provider>
    
)}

export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (context === undefined) {
        throw new Error("useDarkMode is undefined - likely not wrapped by a provider");
    }    

    return context
};

