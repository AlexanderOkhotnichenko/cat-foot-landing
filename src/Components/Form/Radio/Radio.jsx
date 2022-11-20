import React, { forwardRef } from "react";

import "./styles.scss";

export const Radio = forwardRef((props, ref) => {
  return (
    <>
      <input {...props} ref={ref} />
      <label htmlFor={props.htmlFor} className="form-label-radio"><span>{ props.title }</span></label>
    </>
  );
});