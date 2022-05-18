import "./Button.css";

export const Button = function (props) {
  return (
    <button type={props.type} className="button">
      {props.children}
    </button>
  );
};
