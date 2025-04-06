import {
  FETCH_COUNTRIES,
  FILTER_BY_REGION,
  LOAD_MORE_COUNTRIES,
} from "../actions/countryActions";

const initialState = {
  allCountries: [],
  filteredCountries: [],
  region: "All",
  visibleCount: 12,
};

export default function countryReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_COUNTRIES_START":
      return { ...state, isLoading: true };

    case FETCH_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
        filteredCountries: action.payload,
      };
    case FILTER_BY_REGION:
      return {
        ...state,
        filteredCountries: action.payload.filtered,
        region: action.payload.region,
        visibleCount: 12,
      };
    case LOAD_MORE_COUNTRIES:
      return {
        ...state,
        visibleCount: state.visibleCount + 12,
      };
    default:
      return state;
  }
}
