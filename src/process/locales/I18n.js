import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en";
import pt from "./pt";
import ro from "./ro";

const I18n = i18next;

const resources = {
  en,
  pt,
  ro,
};

I18n.use(initReactI18next).init({
  resources,
  lng: "en",
});

export default I18n;
