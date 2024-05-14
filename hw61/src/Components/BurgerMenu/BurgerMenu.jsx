import './BurgerMenu.css';
import BurgerImage from './img/menu-icon.png';
import SearchIcon from './img/search-icon.png';
import CloseIcon from './img/close.png';
import PropTypes from "prop-types";
import {useEffect, useState} from "react";

function BurgerIcon({active}) {
    if (active) {
        return <img className="nav__button-image" src={CloseIcon} alt="Menu icon"/>
    }
    return <img className="nav__button-image" src={BurgerImage} alt="Menu icon"/>;
}

function ActiveBurgerIconInitials({active, initial, userName}) {
    if (active) {
        return (
            <li className="header__nav-item" style={{ backgroundColor: "blue" }}>
                <div className="nav__item-initials">
                    <span className="item__user-initials">{initial}</span>
                </div>
                <div className="nav__item-userName">
                    <span className="item__userName">{userName}</span>
                </div>
            </li>
        );
    }
}

function ActiveBurgerIconInput({active}) {
    if (!active) {
        return <input className="input__text-search" type="text" placeholder={'Search'}/>;
    }
    return <div className="input__text-search" style={{backgroundColor: "blue"}}></div>
}

function BurgerMenu({userName}) {
    const [initial, setInitial] = useState('');
    const [active, setActive] = useState(false);
    const createInitial = userName => {
        let initialArray = userName.split(' ');
        setInitial(initialArray[0][0] + ' ' + initialArray[1][0]);
    };
    useEffect(() => {
        createInitial(userName)
    }, [userName]);
    const statusBurgerButton = () => {
        setActive(!active);
    };
    return (
        <>
            <header className="header">
                <nav className="header__nav">
                    <ul className="header__nav-container">
                        <li className="header__nav-item">
                            <button className="header__nav-button" onClick={statusBurgerButton}>
                                <BurgerIcon active={active}/>
                            </button>
                        </li>
                        <li className="header__nav-item">
                            <div className="nav__item-input">
                                <ActiveBurgerIconInput active={active}/>
                            </div>
                        </li>
                        <li className="header__nav-item">
                            <div className="item__search-button">
                                <button className="search__button">
                                    <img className="search__button-icon" src={SearchIcon} alt="Search icon"/>
                                </button>
                            </div>
                        </li>
                        <li className="header__nav-item">
                            <div className="nav__item-initials">
                                <span className="item__user-initials">{initial}</span>
                            </div>
                            <div className="nav__item-userName">
                                <span className="item__userName">{userName}</span>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
            <ActiveBurgerIconInitials
                active={active}
                initial={initial}
                userName={userName}
            />
        </>
    );
}

BurgerMenu.propTypes = {
    userName: PropTypes.string,
};

BurgerMenu.defaultProps = {
    userName: 'Your Name',
};

export default BurgerMenu;