import './SignInInput.css';

export default function SignInInput({label, type, placeholder}) {
    return (
        <>
          <div className="signin__input-container">
              <div className="signin__label__container">
                  <label className="signin__label">{label}</label>
              </div>
              <input className="signin__input" type={type} placeholder={placeholder}/>
          </div>
        </>
    );
}