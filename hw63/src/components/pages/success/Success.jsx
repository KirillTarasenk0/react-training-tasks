import './Success.css';
import Label from "../../elements/label/Label";
import SignInButton from "../../elements/buttons/SignInButton";
import AllPosts from "../posts/allPosts/AllPosts";
import {useState} from "react";

export default function Success({userLogin}) {
    const [select, setSelect] = useState(undefined);
    function choosePost(value) {
        setSelect(value);
    }
    return (
      <>
          <div className="success__container">
              <div className="success__signin-label">
                  <Label
                      label={'Sign In'}
                  />
              </div>
              <div className="success__items-container">
                  <p className="success__text">You are signed in</p>
                  <SignInButton
                    text={'Go to home'}
                    userLogin={userLogin}
                  />
              </div>
          </div>
          <div>
              <AllPosts
                  choosePost={choosePost}
                  select={select}
              />
          </div>
      </>
    );
}