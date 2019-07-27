import React from "react";
//import { Link } from "@reach/router";
//import { Store } from "./Store";

function App(props) {
  //const { state } = React.useContext(Store);

  return <React.Fragment>{props.children}</React.Fragment>;
}
export default App;
