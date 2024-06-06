import { createContext, useState } from "react";

export const User = createContext('');

function UserContext({children}) {
    const [userData, setUserData] = useState([]);
    const [userRegistrationError, setUserRegistrationError] = useState('');
    const [userLoginError, setUserLoginError] = useState('');
    const isUserExists = (userName, userEmail, userPassword) => {
        const isUserAlreadyExists = userData.some(user => {
            return user.userName === userName && user.userEmail === userEmail && user.userPassword === userPassword;
        });
        return isUserAlreadyExists;
    };
    const handleUserRegistration = (userName, userEmail, userPassword) => {
        if (!isUserExists(userName, userEmail, userPassword)) {
            userData.push({
                userName: userName,
                userEmail: userEmail,
                userPassword: userPassword
            });
            return true;
        } else {
            setUserRegistrationError('Registration error: user with this parameters already exists');
            return false;
        }
    };
    const handleUserLogin = (userName, userEmail, userPassword) => {
        if (isUserExists(userName, userEmail, userPassword)) {
            return true;
        } else {
            setUserLoginError('Login error: user with this parameters does not exists');
            return false;
        }
    };
    console.log(userData);
    return (
      <User.Provider value={{handleUserRegistration, handleUserLogin, userRegistrationError, userLoginError}}>
          {children}
      </User.Provider>
    );
}

export default UserContext;