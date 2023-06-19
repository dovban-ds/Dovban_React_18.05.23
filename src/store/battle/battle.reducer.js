const initialState = {
  loading: true,
  trueData: [],
  fullData: {},
};

export const battleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_TRUE_DATA":
      return {
        ...state,
        trueData: action.payload,
        loading: true,
      };
    case "GET_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        fullData: action.payload,
      };
    default:
      return state;
  }
};
