import React from "react";

export default function CitiesChoice(props) {
  const { toggleCityAction, foundCities, state } = props;
  return (
    <div
      className={`col-sm-2 p-0 mt-2 city 
        ${foundCities.find(city => city === props.name) ? ` success` : ` `}`}
      key={props.index}
      onClick={() =>
        toggleCityAction(props.answer, props.name, state.state, state.dispatch)
      }
    >
      <small>{props.name}</small>
    </div>
  );
}
