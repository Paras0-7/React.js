import styles from "./css/Button.module.css";
export const Button = function (props) {
  return (
    <button className={styles.btn} onClick={props.handler}>
      {props.children}
    </button>
  );
};
