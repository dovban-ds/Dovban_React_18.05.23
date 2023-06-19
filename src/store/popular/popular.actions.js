import {
  GET_REPOS_FAILURE,
  GET_REPOS_LOADING,
  GET_REPOS_SUCCESS,
  SET_SELECTED_LANGUAGE,
} from "./popular.constants";

export const updLanguage = (payload) => ({
  type: SET_SELECTED_LANGUAGE,
  payload,
});

export const getReposLoadingAction = () => ({
  type: GET_REPOS_LOADING,
});

export const getReposSuccessAction = (payload) => ({
  type: GET_REPOS_SUCCESS,
  payload,
});

export const getReposFailureAction = (payload) => ({
  type: GET_REPOS_FAILURE,
  payload,
});
