const initialState = {
  selectedLanguage: "All",
};

export const popularReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECTED_LANGUAGE":
      return {
        ...state,
        selectedLanguage: action.payload,
      };
    default:
      return state;
  }
};
