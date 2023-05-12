import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase";

let USER_ID = null;

const Api = {
  API_CALL: "API_CALL",

  createAccount: (email, password, authentication = auth) =>
    createUserWithEmailAndPassword(authentication, email, password),

  setUid: (uid) => (USER_ID = uid),

  getUid: () => USER_ID,
};

export default Api;
