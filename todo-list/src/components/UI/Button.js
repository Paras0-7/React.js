import styles from "./Button.module.css";
// import styled from "styled-components";

// export const Button = styled.button`
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background-color: #8b005d;
//   cursor: pointer;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   font-size: 1rem;
//   transition: all 0.5s;
//   width: 100%;

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }

//   @media (min-width: 768px) {
//     width: 30%;
//   }
// `;

export const Button = function (props) {
  return (
    <button type={props.type} className={styles.button}>
      {props.children}
    </button>
  );
};
