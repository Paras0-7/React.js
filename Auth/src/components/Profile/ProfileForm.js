import classes from "./ProfileForm.module.css";
import { useRef, useContext } from "react";
import { AuthContext } from "../../store/auth-context";
import { useHistory } from "react-router-dom";
const ProfileForm = () => {
  const inputPassword = useRef();
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const submitHandler = function (event) {
    event.preventDefault();
    const enteredPassword = inputPassword.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyChTXFz2cQSgasx2Hk6tszHbukM5ewKqNQ",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      console.log("Successfull");
      history.replace("/");
    });
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={inputPassword} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
