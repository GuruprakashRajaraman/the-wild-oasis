import { createContext, useContext, useEffect } from "react";
import {useLocalStorageState} from '../hooks/useLocalStorageState';
const DarkModeContext = createContext();

function DarkModeProvider({children}){
    const [isDarkMode , setIsDarkMode]=useLocalStorageState(window.matchMedia('(prefers-color-scheme: dark)').matches ,'isDark')

    useEffect(function(){
        if(isDarkMode){
            document.documentElement.classList.add('dark-mode');
            document.documentElement.classList.remove('light-mode')
        }
        else{
            document.documentElement.classList.remove('dark-mode');
            document.documentElement.classList.add('light-mode')
        }
    },[isDarkMode])
    function toggleDarkMode(){
        setIsDarkMode(isDarkMode=>!isDarkMode)   
    }
    return <DarkModeContext.Provider value={{isDarkMode , toggleDarkMode}}>
        {children}
    </DarkModeContext.Provider>
}


//useing custom hook to consume the context
function useDarkMode(){
    const context = useContext(DarkModeContext)
    if(context === undefined) throw new Error('DarkModeContext was used outside of DarkModeProvider')
    return context;
}

export {DarkModeProvider , useDarkMode}