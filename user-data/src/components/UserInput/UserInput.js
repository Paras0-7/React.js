import styles from "./UserInput.module.css";
import { useState, useRef } from "react";
import { ErrorModal } from "../ErrorModal/ErrorModal";
export const UserInput = function (props) {
  const nameRef = useRef();
  const ageRef = useRef();

  const [error, setError] = useState("");
  const formSubmitHandler = function (e) {
    e.preventDefault();
    const user = {
      name: nameRef.current.value,
      age: ageRef.current.value,
    };
    if (user.name.trim().length === 0 || user.age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non empty values)",
      });
      return;
    }

    if (+user.age < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age ( > 0)",
      });
      return;
    }
    const data = `${user.name} (${user.age} years old)`;
    const newUser = {
      data,
      id: Math.random().toString(),
    };

    props.addNewUser(newUser);
  };

  const errorHandler = function () {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <form onSubmit={formSubmitHandler}>
        <div className={styles["user-form"]}>
          <label>Username</label>
          <input ref={nameRef} type="text" />
          <label>Age (Years)</label>
          <input ref={ageRef} type="number" />
          <button className={styles.btn} type="submit">
            Add User
          </button>
        </div>
      </form>
    </>
  );
};
