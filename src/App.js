import { Container } from "react-bootstrap";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import NavbarWrapper from "./components/Navbar";
import Footer from "./components/Footer";

import { Recipes, Details } from "./pages/recipes";
import PageNotFound from "./pages/404";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/components.scss";
import "./styles/elements.scss";
import "./styles/media.scss";

function App() {
  return (
    <div className="main-content">
      <div>
        <NavbarWrapper />
        <Container>
          <BrowserRouter>
            <Switch>
              <Route path="/recipes" render={() => <Recipes />} />
              <Route path="/details" render={() => <Details />} />
              <Route exact path="/">
                <Redirect to="/recipes" />
              </Route>
              <Route render={() => <PageNotFound />} />
            </Switch>
          </BrowserRouter>
        </Container>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
