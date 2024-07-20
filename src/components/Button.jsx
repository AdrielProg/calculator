import "./Button.css";

const Button = (props) => {
  let classNames = "button ";
  classNames += props.operation ? "operation" : "";
  classNames += props.double ? "double" : "";
  classNames += props.triple ? "triple" : "";
  return (
    <button
      onClick={(e) => props.click && props.click(props.label)}
      className={classNames}
    >
      {props.label}
    </button>
  );
};
export default Button;
