import React from "react";
import { Container } from "react-bootstrap";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import NavbarWrapper from "./components/navbar";
import Footer from "./components/footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from "react-toastify";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./styles/components.scss";
import "./styles/elements.scss";
import "./styles/media.scss";

const Recipes = React.lazy(() => import("./pages/recipes/main"));
const Details = React.lazy(() => import("./pages/recipes/details"));
const PageNotFound = React.lazy(() => import("./pages/404"));

function App() {
  const loading = (
    <div className="loader-container">
      <FontAwesomeIcon icon={faSpinner} spin={true} className="fa-3x" />
    </div>
  );

  return (
    <div className="main-content">
      <ToastContainer autoClose={7000} />
      <BrowserRouter>
        <div>
          <NavbarWrapper />
          <Container className="main-container">
            <Switch>
              <Route
                path="/recipes"
                render={() => (
                  <React.Suspense fallback={loading}>
                    <Recipes />
                  </React.Suspense>
                )}
              />
              <Route
                path="/details"
                render={() => (
                  <React.Suspense fallback={loading}>
                    <Details />
                  </React.Suspense>
                )}
              />
              <Route exact path="/">
                <Redirect to="/recipes" />
              </Route>
              <Route
                render={() => (
                  <React.Suspense fallback={loading}>
                    <PageNotFound />
                  </React.Suspense>
                )}
              />
            </Switch>
          </Container>
        </div>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
