import { FC, ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";
import PopularList from "./PopularList.tsx";
import { getRepos } from "../../store/popular/popular.thunk.ts";
import { AppDispatch, RootState } from "../../store/store";
import React from "react";

const languages: string[] = [
  "All",
  "JavaScript",
  "Ruby",
  "Java",
  "CSS",
  "Python",
];

const Popular: FC = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedLanguage: string = useSelector(
    (state: RootState) => state.popularReducer.selectedLanguage
  );
  const loading = useSelector(
    (state: RootState) => state.popularReducer.loading
  );
  const repos = useSelector((state: RootState) => state.popularReducer.repos);
  const error = useSelector((state: RootState) => state.popularReducer.error);

  const [searchParams, setSearchParams] = useSearchParams();

  const reposQuery = searchParams.get("lang") || "All";

  useEffect((): void => {
    dispatch(getRepos(reposQuery));
  }, [reposQuery]);

  return (
    <div>
      <ul className="languages">
        {languages.map(
          (language: string, index: number): ReactElement => (
            <li
              key={index}
              style={{
                color: language === reposQuery ? "#d0021b" : "#000000",
              }}
              onClick={(): void => setSearchParams({ lang: language })}
            >
              {language}
            </li>
          )
        )}
      </ul>

      <ul className="popular-list">
        <PopularList repos={repos} />
      </ul>
      <Backdrop open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Popular;
