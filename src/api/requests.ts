import axios from "axios";

export const getReposRequest = async (language: string) => {
  try {
    const response = await axios.get(
      window.encodeURI(
        `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=desc&type=Repositories`
      )
    );
    return response.data.items;
  } catch (error) {
    throw new Error(error);
  }
};
