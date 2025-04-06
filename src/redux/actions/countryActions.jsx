import axios from "axios";

// Action Types
export const FETCH_COUNTRIES = "FETCH_COUNTRIES";
export const FILTER_BY_REGION = "FILTER_BY_REGION";
export const LOAD_MORE_COUNTRIES = "LOAD_MORE_COUNTRIES";

// Action Creators
export const fetchCountries = () => async (dispatch) => {
  dispatch({ type: "FETCH_COUNTRIES_START" });
  try {
    const res = await axios.get("https://restcountries.com/v2/all");
    dispatch({
      type: FETCH_COUNTRIES,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const filterByRegion = (region) => (dispatch, getState) => {
  const { allCountries } = getState().countries;

  if (!allCountries) {
    console.error("Countries data not loaded yet");
    return;
  }

  const filtered =
    region === "All"
      ? allCountries
      : allCountries.filter((c) => c.region === region);

  dispatch({
    type: FILTER_BY_REGION,
    payload: { filtered, region },
  });
};

export const loadMoreCountries = () => ({
  type: LOAD_MORE_COUNTRIES,
});
