import styles from "./UserList.module.css";
import { User } from "./../User/User";
import { useState } from "react";

export const UserList = function (props) {
  return (
    <ul className={styles["user-list"]}>
      {props.users.map((user) => {
        return (
          <User key={user.id} id={user.id}>
            {user.data}
          </User>
        );
      })}
    </ul>
  );
};
