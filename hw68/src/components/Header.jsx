import './Header.css';
import {Link, Outlet} from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="header">
                <nav className="nav">
                    <ul className="ul">
                        <li className="ul__item">
                            <Link className="ul__item-text" to={'/posts'}>All</Link>
                        </li>
                        <li className="ul__item">
                            <Link className="ul__item-text" to={'/myFavourites'}>My Favourites</Link>
                        </li>
                        <li className="ul__item">
                            <Link className="ul__item-text" to={'/popular'}>Popular</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="main">
                <Outlet/>
            </main>
        </>
    );
}