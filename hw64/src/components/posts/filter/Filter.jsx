import './Filter.css';
import {useState} from "react";

export default function Filter({filterPosts}) {
    const [inputValue, setInputValue] = useState('');
    return (
      <>
        <div className="filter__container">
            <input type="text" placeholder="Фильтр по названию" onChange={(event) => {
                setInputValue(event.target.value);
            }}/>
            <button onClick={() => filterPosts(inputValue)}>Отправить</button>
        </div>
      </>
    );
}