import './LanguageChanger.css';
import {LanguageContext} from "../../contexts/LanguageContext";
import {useContext} from "react";

export default function LanguageChanger({translationLanguage}) {
    const {changeLanguage} = useContext(LanguageContext)
    return (
      <>
          <div>
              <label htmlFor="">{translationLanguage.changeLanguage}</label>
              <select name="" id="" onChange={(event) => changeLanguage(event.target.value)}>
                  <option value="EN">{translationLanguage.en}</option>
                  <option value="RU">{translationLanguage.ru}</option>
              </select>
          </div>
      </>
    );
}