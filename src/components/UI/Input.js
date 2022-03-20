import classes from "./Input.module.css";
//todo
const Input = (props) => {
  return (
    <div className={props.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input id={props.input.id} {...props.input}  />
    </div>
  );
};

export default Input;
