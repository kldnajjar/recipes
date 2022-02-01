import { Container } from "react-bootstrap";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import NavbarWrapper from "./components/navbar";
import Footer from "./components/footer";

import { Recipes, Details } from "./pages/recipes";
import PageNotFound from "./pages/404";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/components.scss";
import "./styles/elements.scss";
import "./styles/media.scss";

function App() {
  return (
    <div className="main-content">
      <BrowserRouter>
        <div>
          <NavbarWrapper />
          <Container className="main-container">
            <Switch>
              <Route path="/recipes" render={() => <Recipes />} />
              <Route path="/details" render={() => <Details />} />
              <Route exact path="/">
                <Redirect to="/recipes" />
              </Route>
              <Route render={() => <PageNotFound />} />
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
