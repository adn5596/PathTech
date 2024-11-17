import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Router"; // Adjust the import path if necessary
import store from "./Redux/store.js"; // Redux store
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next"; // i18next Provider
import i18n from "./i18n"; // Import your i18n configuration

function App() {
  return (
    <>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          {/* <RouterProvider router={router} /> */}
          <RouterProvider router={router} basename="/patht" />{" "}
        </I18nextProvider>
      </Provider>
    </>
  );
}

export default App;
