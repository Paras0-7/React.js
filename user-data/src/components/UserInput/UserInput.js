import styles from "./UserInput.module.css";
import { useState } from "react";
export const UserInput = function (props) {
  const [user, setUser] = useState({ name: "", age: "" });

  const formSubmitHandler = function (e) {
    e.preventDefault();

    const data = `${user.name} (${user.age} years old)`;
    const newUser = {
      data,
      id: Math.random().toString(),
    };

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
  return (
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
  );
};
