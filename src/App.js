import React, { useEffect, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const RouteContainer = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={() => {
              return (
                <>
                  {route.path !== "/login" &&
                    route.path !== "/register" &&
                    route.path !== "/dashboard" &&
                    route.path !== "/admin/dashboard" && <Header />}
                  <route.main />
                  {route.path !== "/login" &&
                    route.path !== "/register" &&
                    route.path !== "/dashboard" &&
                    route.path !== "/admin/dashboard" && <Footer />}
                </>
              );
            }}
          />
        );
      });
    }
    return result;
  };
  return (
    <>
      <Router>
        <Switch>{RouteContainer(routes)}</Switch>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;