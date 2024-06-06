import { User } from "../../contexts/User";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration() {
    const {handleUserRegistration, userRegistrationError} = useContext(User);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const navigate = useNavigate();
    return (
      <>
        {userRegistrationError && <div>{userRegistrationError}</div>}
        <div>
            <h1>Registration</h1>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Name" onChange={event => {
                    setUserName(event.target.value);
                }}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="Email" onChange={event => {
                    setUserEmail(event.target.value);
                }}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" placeholder="Password" onChange={event => {
                    setUserPassword(event.target.value);
                }}/>
            </div>
            <button onClick={() => {
                handleUserRegistration(userName, userEmail, userPassword) ? navigate('/success') : navigate('/registration');
            }}>
                Register
            </button>
        </div>
      </>
    );
}