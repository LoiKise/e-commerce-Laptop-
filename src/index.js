import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Store from "./data/store";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import Fallback from "./components/FallBack";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <SnackbarProvider
        maxSnack={6}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        preventDuplicate
      >
        <Suspense fallback={<Fallback />}>
          <App />
        </Suspense>
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
;