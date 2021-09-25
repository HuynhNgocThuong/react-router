import React from "react";
import PropTypes from "prop-types";
import { useHistory, useLocation, useRouteMatch } from "react-router";
import queryString from "query-string";
DetailPage.propTypes = {};

function DetailPage(props) {
  const history = useHistory();
  const match = useRouteMatch();
  // Update URL Params
  // Listen to Location search -> Update state
  function updateQueryParam() {
    const queryParams = { status: "all" };
    // Update status on URL
    // If you click status is all -> this function will be update url localhost:3000/product?status=all
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  }
  const location = useLocation();
  const params = queryString.parse(location.search);
  //Get query params

  // Ex: localhost:3000/product?status=new
  function getQueryParams() {
    console.log(params.status); // -> new
  }
  return <div>Detail Page</div>;
}

export default DetailPage;
