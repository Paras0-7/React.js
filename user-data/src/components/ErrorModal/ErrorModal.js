import styles from "./ErrorModal.module.css";

export const ErrorModal = function (props) {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm}></div>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <button onClick={props.onConfirm} className={styles.btn}>
            Okay
          </button>
        </footer>
      </div>
    </div>
  );
};
