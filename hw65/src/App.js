import './App.css';
import {ThemeContext} from "./contexts/ThemeContext";
import {LanguageContext} from "./contexts/LanguageContext";
import {translations} from "./helpers/translations";
import ThemeChanger from "./components/themeChanger/ThemeChanger";
import LanguageChanger from "./components/languageChanger/LanguageChanger";
import {useContext, useEffect, useState} from "react";

function App() {
  const {theme} = useContext(ThemeContext);
  const {language} = useContext(LanguageContext);
  const [translationLanguage, setTranslationLanguage] = useState(translations.en);
  useEffect(() => {
      if (language === 'RU') {
          setTranslationLanguage(translations.ru);
      } else {
          setTranslationLanguage(translations.en);
      }
  }, [language]);
  return (
    <>
      <div className={theme !== 'light' ? 'dark__theme' : 'light-theme'}>
          <ThemeChanger
            translationLanguage={translationLanguage}
          />
          <LanguageChanger
              translationLanguage={translationLanguage}
          />
      </div>
    </>
  );
}

export default App;
