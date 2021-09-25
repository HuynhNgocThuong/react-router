import "./App.css";
import { Fragment } from "react";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import Error from "./components/Error";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";
import About from "./components/About";
function App() {
  return (
    <Router>
      <Fragment>
        <Navigation />
        {/* Switch only render the first path */}
        <Switch>
          <Redirect from="/home" to="/" exact></Redirect>
          <Route path="/" exact component={Home}></Route>
          <Route path="/product" component={Products}></Route>
          <Route path="/about" component={About}></Route>
          <Route component={Error}></Route>
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
