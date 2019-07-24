const API_URL =
  "https://api.openweathermap.org/data/2.5/group?id=6455259,1850147,5128638,2643743,3448439,1699806,1581130,524901,6458923,745044,5855797,1880252,1668341,6167865,1835848,6692263,7839805,2542997&units=metric&APPID=a84bb6c833c9cfbde1f99328c2aeff1c";

export const fetchDataAction = async dispatch => {
  const data = await fetch(API_URL);
  const dataJSON = await data.json();
  return dispatch({
    type: "FETCH_DATA",
    payload: dataJSON.list
  });
};

export const toggleCityAction = (answer, city, state, dispatch) => {
  const cityInList = state.cities.includes(city);
  let dispatchObj = {
    type: "FAIL",
    payload: city
  };
  //success and no succeed
  if (answer === city && cityInList)
    dispatchObj = {
      type: "FOUND_CITY",
      payload: city
    };
  return dispatch(dispatchObj);
};

export const toggleFlippedAction = (isFlipped, dispatch) => {
  let dispatchObj = {
    type: "SET_FLIPPED",
    payload: isFlipped
  };
  return dispatch(dispatchObj);
};
