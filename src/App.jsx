import React from "react";
//import { Link } from "@reach/router";
//import { Store } from "./Store";

function App(props) {
  //const { state } = React.useContext(Store);

  return (
    <React.Fragment>
      <header className="header text-center p-4">
        <span className="mr-2" role="img" aria-label="sun">
          ☀️
        </span>
        <h3 className="d-inline">Meteo game </h3>
        <span role="img" aria-label="sun">
          ☀️
        </span>
        <small className="text-muted d-none">
          Choose the right city according to the weather.
        </small>
        <a href="#">
          <span className="float-right" role="img" aria-label="info">
            ℹ️
          </span>
        </a>
      </header>
      {props.children}
    </React.Fragment>
  );
}
export default App;
