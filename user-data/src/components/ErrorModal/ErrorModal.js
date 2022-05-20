import styles from "./ErrorModal.module.css";
import ReactDom from "react-dom";
const Backdrop = function (props) {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = function (props) {
  return (
    <div>
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
export const ErrorModal = function (props) {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};
