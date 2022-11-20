import React, { forwardRef } from "react";

import "./styles.scss";

export const Checkbox = forwardRef((props, ref) => {

  return (
    <>
      <input {...props} ref={ref} />
      <label htmlFor={props.htmlFor} className="form-label-checkbox">
        <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 11.718L1.3 5.26951L0.25 6.45739L7 14.0938L18.25 1.36648L17.2 0.09375L7 11.718Z" />
        </svg>
        <span>{props.title}</span>
      </label>
    </>
  );
});
