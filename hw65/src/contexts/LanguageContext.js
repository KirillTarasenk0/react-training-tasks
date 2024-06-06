import {createContext, useState} from "react";

export const LanguageContext = createContext('ru');

function LanguageContextProvider({children}) {
    const [language, setLanguage] = useState('ru');
    const changeLanguage = languageValue => {
        setLanguage(languageValue);
    };
    return (
      <LanguageContext.Provider value={{language, changeLanguage}}>
          {children}
      </LanguageContext.Provider>
    );
}

export default LanguageContextProvider;