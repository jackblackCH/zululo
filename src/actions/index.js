
export const LOAD_COUNTRIES = "LOAD_COUNTRIES";

export function loadCities(url) {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    fetch(url)
      .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
      .then(response => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)))

  }
}
export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
  return {
    type: LOAD_COUNTRIES,
    items
  };
}
