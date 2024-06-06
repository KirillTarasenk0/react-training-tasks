import './App.css';
import SignIn from "./components/pages/signIn/SignIn";
import Success from "./components/pages/success/Success";
import {useState} from "react";

function App() {
    const [login, setLogin] = useState(false);
    function loginUser() {
        setLogin(!login);
    }
    return (
        <>
            {!login &&
                <SignIn
                    userLogin={loginUser}
                />
            }
            {login &&
                <Success
                    userLogin={loginUser}
                />
            }
        </>
    );
}

export default App;
