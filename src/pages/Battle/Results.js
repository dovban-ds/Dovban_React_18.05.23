import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PlayerPreview from "./PlayerPreview";
import { Backdrop, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getFullData, getTrueData } from "../../store/battle/battle.thunk";
import { getDataLoadingAction } from "../../store/battle/battle.actions";

const Result = () => {
  const location = useLocation();

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.battleReducer.loading);
  const fullData = useSelector((state) => state.battleReducer.fullData);
  const trueData = useSelector((state) => state.battleReducer.trueData);
  console.log(loading);

  useEffect(() => {
    dispatch(getTrueData(location));
  }, []);

  useEffect(() => {
    dispatch(getDataLoadingAction());
    if (typeof trueData[0] !== "undefined") {
      dispatch(getFullData(trueData[0]));
    } else {
      return;
    }
  }, [trueData]);

  return (
    <div className="box">
      <p>
        The winner is: <b>{trueData[0]}</b>
      </p>
      <p>
        With the most stars on one repo:{" "}
        <b>{trueData[1] === 0 ? 0 : trueData[1]}</b>
      </p>
      <PlayerPreview avatar={fullData.avatar_url} username={fullData.login}>
        <div className="column">
          {fullData.location && (
            <p>
              Location: <b>{fullData.location}</b>
            </p>
          )}
          {fullData.company && (
            <p>
              Company: <b>{fullData.company}</b>
            </p>
          )}
          {fullData.followers === null ? null : (
            <p>
              Followers: <b>{fullData.followers}</b>
            </p>
          )}
          {fullData.following === null ? null : (
            <p>
              Following: <b>{fullData.following}</b>
            </p>
          )}
          {fullData.blog && (
            <p>
              Blog: <b>{fullData.blog}</b>
            </p>
          )}
          {fullData.public_repos === null ? null : (
            <p>
              Public repos: <b>{fullData.public_repos}</b>
            </p>
          )}
        </div>
      </PlayerPreview>
      <Backdrop open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Result;
