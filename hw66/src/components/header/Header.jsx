import './Header.css';
import { Link, Outlet } from "react-router-dom";

export default function Header() {
    return (
      <>
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to={'/home'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/registration'}>Registration</Link>
                    </li>
                    <li>
                        <Link to={'/login'}>Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <div>
                <Outlet/>
            </div>
        </main>
      </>
    );
}