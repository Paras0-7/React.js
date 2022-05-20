import styles from "./UserInput.module.css";
import { useState } from "react";
import { ErrorModal } from "../ErrorModal/ErrorModal";
export const UserInput = function (props) {
  const [user, setUser] = useState({ name: "", age: "" });
  const [error, setError] = useState("");
  const formSubmitHandler = function (e) {
    e.preventDefault();

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
    setUser({
      name: "",
      age: "",
    });
    props.addNewUser(newUser);
  };

  const nameChangeHandler = function (e) {
    setUser((prev) => {
      return {
        ...prev,
        name: e.target.value,
      };
    });
  };

  const ageChangeHandler = function (e) {
    setUser((prev) => {
      return {
        ...prev,
        age: e.target.value,
      };
    });
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
          <input onChange={nameChangeHandler} value={user.name} type="text" />
          <label>Age (Years)</label>
          <input onChange={ageChangeHandler} value={user.age} type="number" />
          <button className={styles.btn} type="submit">
            Add User
          </button>
        </div>
      </form>
    </>
  );
};
