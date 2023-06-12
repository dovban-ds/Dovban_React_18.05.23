import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularRepos } from "../../api/requests";
import { useSearchParams } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";
import { updLanguage } from "../../store/popular/popular.actions";
import PopularList from "./PopularList";

const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

const Popular = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (state) => state.popularReducer.selectedLanguage
  );
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const reposQuery = searchParams.get("lang") || "All";

  useEffect(() => {
    setLoading(true);
    fetchPopularRepos(reposQuery)
      .then((data) => {
        setRepos(data);
      })
      .then(() => dispatch(updLanguage(reposQuery)))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
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
