import axios from "axios";
import {
  getDataLoadingAction,
  getDataSuccessAction,
  getTrueDataAction,
} from "./battle.actions";

export const getFullData = (trueData) => (dispatch) => {
  dispatch(getDataLoadingAction());

  axios
    .get(`https://api.github.com/users/${trueData}`)
    .then((response) => dispatch(getDataSuccessAction(response.data)));
};

export const getTrueData = (location) => (dispatch) => {
  dispatch(getDataLoadingAction());

  const params = new URLSearchParams(location.search);
  const urls = [
    `https://api.github.com/users/${params.get("playerOneName")}/repos`,
    `https://api.github.com/users/${params.get("playerTwoName")}/repos`,
  ];
  const requests = urls.map((url) => axios.get(url));
  axios
    .all(requests)
    .then((data) => {
      const firstArr = data[0].data.map((item) => item.stargazers_count);
      const secondArr = data[1].data.map((item) => item.stargazers_count);
      return Math.max(...firstArr) > Math.max(...secondArr)
        ? dispatch(
            getTrueDataAction([
              params.get("playerOneName"),
              Math.max(...firstArr),
            ])
          )
        : dispatch(
            getTrueDataAction([
              params.get("playerTwoName"),
              Math.max(...secondArr),
            ])
          );
    })
    .catch((error) => {
      console.log(error);
    });
};
