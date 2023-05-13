import React from "react";

import { mock } from "Helpers";

const Button = ({ label = "", onClick = mock }) => {
  return (
    <button className="bg-black text-white" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
