import React, { forwardRef } from "react";

import "./styles.scss";

export const Textarea = forwardRef((props, ref) => {
  return <textarea ref={ref} {...props} />;
});
