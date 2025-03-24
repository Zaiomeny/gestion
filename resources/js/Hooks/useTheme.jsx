import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(
    {
        theme: false,
        switchTheme: ()=>{}
    }
);

export function ThemeContextProvider({children}){
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ==='dark'
    )

    const switchTheme = ()=>{
        setTheme((theme)=>theme = !theme)
    }
    useEffect(()=>{
        let hasAlreadyThemeInLocalStorage = localStorage.getItem('theme')
        if(!hasAlreadyThemeInLocalStorage){
            localStorage.setItem('theme','light')
        }
    },[])

    useEffect(()=>{
        if(theme){
            localStorage.setItem("theme","dark")
            document.documentElement.classList.add('dark')
        }else{
            localStorage.setItem("theme","light")
            document.documentElement.classList.remove('dark')
        }
    },[theme])

    return <ThemeContext.Provider value={{theme, switchTheme}}>
                {children}
            </ThemeContext.Provider>
}

