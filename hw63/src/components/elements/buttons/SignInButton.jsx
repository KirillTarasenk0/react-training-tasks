import './SignInButton.css';

export default function SignInButton({text, userLogin}) {
    return (
      <>
        <div className="signin__button-container">
            <button className="signin__button" type="submit" onClick={userLogin}>{text}</button>
        </div>
      </>
    );
}