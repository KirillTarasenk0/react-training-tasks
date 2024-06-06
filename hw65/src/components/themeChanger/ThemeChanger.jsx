import './ThemeChanger.css';
import {ThemeContext} from "../../contexts/ThemeContext";
import {useContext} from "react";

export default function ThemeChanger({translationLanguage}) {
    const {changeTheme} = useContext(ThemeContext);
    return (
      <>
        <div>
            <label htmlFor="">{translationLanguage.changeTheme}</label>
            <select name="" id="" onChange={(event) => changeTheme(event.target.value)}>
                <option value="light">{translationLanguage.light}</option>
                <option value="dark">{translationLanguage.dark}</option>
            </select>
        </div>
      </>
    );
}