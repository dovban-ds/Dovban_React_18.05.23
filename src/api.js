import axios from "axios";

export const fetchPopularRepos = (language) => {
  return axios
    .get(
      window.encodeURI(
        `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=desc&type=Repositories`
      )
    )
    .then((response) => response.data.items)
    .catch((error) => {
      throw new Error(error);
    });
};
