import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PlayerPreview from "./PlayerPreview";
import { Backdrop, CircularProgress } from "@mui/material";

const Result = () => {
  const location = useLocation();
  const [starsFirst, setStarsFirst] = useState([]);
  const [starsSecond, setStarsSecond] = useState([]);
  const [trueData, setTrueData] = useState([]);
  const [fullData, setFullData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urls = [
      `https://api.github.com/users/${params.get("playerOneName")}/repos`,
      `https://api.github.com/users/${params.get("playerTwoName")}/repos`,
    ];
    const requests = urls.map((url) => axios.get(url));
    axios
      .all(requests)
      .then((data) => {
        setStarsFirst(data[0].data);
        setStarsSecond(data[1].data);

        const firstArr = data[0].data.map((item) => item.stargazers_count);
        const secondArr = data[1].data.map((item) => item.stargazers_count);
        return Math.max(...firstArr) > Math.max(...secondArr)
          ? setTrueData([params.get("playerOneName"), Math.max(...firstArr)])
          : setTrueData([params.get("playerTwoName"), Math.max(...secondArr)]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    if (typeof trueData[0] !== "undefined") {
      axios
        .get(`https://api.github.com/users/${trueData[0]}`)
        .then((response) => setFullData(response.data))
        .then(() => setLoading(false));
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
