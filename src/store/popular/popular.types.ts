export interface IPopularStore {
  selectedLanguage: string;
  loading: boolean;
  repos: ReposT;
  error: null | string;
}

export interface IRepos {
  [key: string]: any;
}

export type ReposT = [] | IRepos[];
