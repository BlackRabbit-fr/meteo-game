import React from "react";

export default function Header() {
  return (
    <div>
      <header className="header text-center p-4 mt-4">
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
        <button
          data-toggle="modal"
          data-target="#instructions"
          style={{ cursor: "pointer" }}
          id="instructionsButton"
        >
          <span className="float-right" role="img" aria-label="info">
            ℹ️
          </span>
        </button>
        <div
          className="modal fade"
          id="instructions"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="instructions"
          aria-hidden="true"
        >
          <div className="modal-dialog  modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="instructions">
                  Meteo game instructions
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Try to guess which city is reffered by the displayed weather.
                <br />
                <br />
                To do so, choose a city from the dropdown list.
                <br />
                <br />
                You will be notice if you chose the right city or not.
                <br />
                <br />
                Have fun! 😊
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
