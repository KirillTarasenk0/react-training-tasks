import {createContext, useState} from "react";

export const ThemeContext = createContext('light');

function ThemeContextProvider({children}) {
    const [theme, setTheme] = useState('light');
    const changeTheme = themeValue => {
      setTheme(themeValue);
    };
    return (
      <ThemeContext.Provider value={{theme, changeTheme}}>
          {children}
      </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;