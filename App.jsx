import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "Redux/store";

import Application from "./src/UI/Application";

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Application />
    </PersistGate>
  </Provider>
);

export default App;
