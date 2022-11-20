import React, { forwardRef } from "react";

import "./styles.scss";

export const Input = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});
