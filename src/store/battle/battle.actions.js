export const getDataLoadingAction = () => ({
  type: "GET_DATA_LOADING",
});

export const getDataSuccessAction = (payload) => ({
  type: "GET_DATA_SUCCESS",
  payload,
});

export const getTrueDataAction = (payload) => ({
  type: "GET_TRUE_DATA",
  payload,
});
