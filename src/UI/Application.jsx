import React, { useState } from "react";
import { Button } from "Components";
import I18n from "Locales/I18n";

import { createUser } from "Reducers/user";
import Api from "Api";

const handleOnChange = (setState, e) => {
  setState(e.target.value);
};

const Application = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(Api.getUid());

  return (
    <>
      <input
        placeholder="Email"
        onChange={handleOnChange.bind(null, setEmail)}
      />
      <input
        placeholder="Password"
        onChange={handleOnChange.bind(null, setPassword)}
      />
      <Button
        label={I18n.t("general:login")}
        onClick={createUser.bind(null, email, password)}
      />
    </>
  );
};

export default Application;
