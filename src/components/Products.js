import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import Error from "../components/Error";
import DetailPage from "./DetailPage";
import ListPage from "./ListPage";
Products.propTypes = {};

function Products(props) {
  // Nesting routing
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:id`} component={DetailPage} exact />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default Products;
