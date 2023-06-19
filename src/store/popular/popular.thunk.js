import { getReposRequest } from "../../api/requests";
import {
  getReposFailureAction,
  getReposLoadingAction,
  getReposSuccessAction,
  updLanguage,
} from "./popular.actions";

export const getRepos = (reposQuery) => (dispatch) => {
  dispatch(getReposLoadingAction());

  getReposRequest(reposQuery)
    .then((data) => {
      dispatch(getReposSuccessAction(data));
    })
    .then(() => dispatch(updLanguage(reposQuery)))
    .catch((error) => dispatch(getReposFailureAction(error)));
};
