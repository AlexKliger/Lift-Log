import { createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export const themes = {
    light: 'light',
    dark: 'dark'
}

// Create context
export const ThemeContext = createContext(themes.light)

// Provider component
const ThemeProdiver = ({ children }) => {
    const [theme, setTheme] = useLocalStorage('theme', themes.light)
    return (
        <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProdiver