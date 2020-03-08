import React from "react";

const Button = props => (
  <button style={props.style} className={`a-btn__${props.className}`}>
    {props.children}
  </button>
);

export default Button;
