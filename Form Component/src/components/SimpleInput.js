import { useState, useRef } from "react";
const SimpleInput = (props) => {
  const nameRef = useRef();
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [touched, setIsTouched] = useState(false);

  const nameIsInvalid = !isValid && touched;
  const classes = nameIsInvalid ? "form-control invalid" : "form-control";
  const nameInputHandler = function (e) {
    setName(e.target.value);
  };

  const formSubmitHandler = function (e) {
    e.preventDefault();
    setIsTouched(true);

    if (nameRef.current.value.trim() === "") {
      setIsValid(false);
      return;
    }

    setIsValid(true);
    console.log(nameRef.current.value);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={classes}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameRef}
          onChange={nameInputHandler}
          type="text"
          id="name"
        />
        {nameIsInvalid && <p className="error-text">Name Must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
