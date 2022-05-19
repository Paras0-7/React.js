import styles from "./User.module.css";
export const User = function (props) {
  return <li className={styles.user}>{props.children}</li>;
};
