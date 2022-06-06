import { useState } from "react";

export const useInput = function (validateValue) {
  const [value, setValue] = useState("");
  const [touched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(value);
  const hasError = !valueIsValid && touched;

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };
  return {
    value,
    valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
  };
};
