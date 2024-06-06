import './SignIn.css';
import Label from "../../elements/label/Label";
import SignInInput from "../../elements/inputs/SignInInput";
import SignInButton from "../../elements/buttons/SignInButton";

export default function SignIn({userLogin}) {
    return (
        <>
            <div className="signin__container">
                <div className="signin__label">
                    <Label
                        label={'Sign In'}
                    />
                </div>
                <div className="signin__items-wrapper">
                    <div className="signin__items-container">
                        <SignInInput
                            label={"Email"}
                            type={"email"}
                            placeholder={"Your email"}
                        />
                        <SignInInput
                            label={"Password"}
                            type={"password"}
                            placeholder={"Your password"}
                        />
                        <a className="signin__password-link" href="#">Forgot password?</a>
                        <SignInButton
                            userLogin={userLogin}
                            text={"Sign in"}
                        />
                        <a className="signin__account-link" href="#">Already have an account? <span>Sign up!</span></a>
                    </div>
                </div>
            </div>
        </>
    );
}