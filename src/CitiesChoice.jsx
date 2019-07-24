import React from "react";

export default function CitiesChoice(props) {
  const { toggleCityAction, foundCities, state } = props;
  return (
    <div className="col-sm" key={props.name}>
      <a
        className={`dropdown-item 
        ${foundCities.find(city => city === props.name) ? ` success` : ` `}`}
        onClick={() =>
          toggleCityAction(
            props.answer,
            props.name,
            state.state,
            state.dispatch
          )
        }
        href="#"
      >
        {props.name}
      </a>
    </div>
  );
}
