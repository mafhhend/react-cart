import React from "react";
import classes from "./Input.module.css";

//todo
const Input = React.forwardRef((props,ref) => {
  return (
    <div className={props.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} id={props.input.id} {...props.input}  />
    </div>
  );
});

export default Input;
