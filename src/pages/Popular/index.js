import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";
import PopularList from "./PopularList";
import { getRepos } from "../../store/popular/popular.thunk";

const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

const Popular = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (state) => state.popularReducer.selectedLanguage
  );
  const loading = useSelector((state) => state.popularReducer.loading);
  const repos = useSelector((state) => state.popularReducer.repos);
  const error = useSelector((state) => state.popularReducer.error);

  const [searchParams, setSearchParams] = useSearchParams();

  const reposQuery = searchParams.get("lang") || "All";

  useEffect(() => {
    dispatch(getRepos(reposQuery));
  }, [reposQuery]);

  return (
    <div>
      <ul className="languages">
        {languages.map((language, index) => (
          <li
            key={index}
            style={{
              color: language === reposQuery ? "#d0021b" : "#000000",
            }}
            onClick={() => setSearchParams({ lang: language })}
          >
            {language}
          </li>
        ))}
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
