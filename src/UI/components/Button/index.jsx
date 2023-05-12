import React from "react";

import { mock } from "Helpers";

const Button = ({ label = "", onClick = mock }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
