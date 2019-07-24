import React from "react";

export default function CitiesChoice(props) {
  const { toggleCityAction, foundCities, state } = props;
  return (
    <div class="col-sm">
      <a
        className={`dropdown-item 
        ${foundCities.find(city => city === props.name) ? ` success` : ` `}`}
        key={props.index}
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
