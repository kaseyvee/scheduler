import React from "react";
import classNames from "classnames";

import "components/Button.scss";

// Buttons being used in Appointment subcomponents (Confirm.js, Form.js)
export default function Button(props) {
   const buttonClass = classNames("button", {
      "button--confirm": props.confirm,
      "button--danger": props.danger
    });
 
   return (
      <button
         className={buttonClass}
         onClick={props.onClick}
         disabled={props.disabled}
      >
         {props.children}
      </button>
   );
}
