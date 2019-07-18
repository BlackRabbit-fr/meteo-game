import React from "react";
//import { Link } from "@reach/router";
//import { Store } from "./Store";

function App(props) {
  //const { state } = React.useContext(Store);

  return (
    <React.Fragment>
      <header className="header">
        {/* <div>
          <Link to="/">Home</Link>{" "}
        </div> */}
      </header>
      {props.children}
    </React.Fragment>
  );
}
export default App;
