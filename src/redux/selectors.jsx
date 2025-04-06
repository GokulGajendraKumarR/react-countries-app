export const selectCountriesState = (state) => state.countries;

export const selectFilteredCountries = (state) =>
  selectCountriesState(state).filteredCountries || [];

export const selectRegion = (state) =>
  selectCountriesState(state).region || "All";

export const selectVisibleCount = (state) =>
  selectCountriesState(state).visibleCount || 12;

export const selectIsLoading = (state) => state.countries?.isLoading || false; 
