import { useState } from "react";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";
import { Link } from "react-router-dom";

const Battle = () => {
  const [playerData, setPlayerData] = useState({
    playerOneName: "",
    playerTwoName: "",
    playerOneImage: null,
    playerTwoImage: null,
  });

  const handleSubmit = (id, userName) => {
    const image = new Image();
    image.onload = () => {
      setPlayerData((prevState) => ({
        ...prevState,
        [`${id}Name`]: userName,
        [`${id}Image`]: `https://github.com/${userName}.png?size=200`,
      }));
    };
    image.onerror = () => {
      alert("User not found!");
    };
    image.src = `https://github.com/${userName}.png?size=200`;
  };

  const handleReset = (id) => {
    setPlayerData((prevState) => ({
      ...prevState,
      [`${id}Name`]: "",
      [`${id}Image`]: null,
    }));
  };

  return (
    <div>
      <div className="row">
        {playerData.playerOneImage ? (
          <PlayerPreview
            avatar={playerData.playerOneImage}
            username={playerData.playerOneName}
          >
            <button className="reset" onClick={() => handleReset("playerOne")}>
              Reset
            </button>
          </PlayerPreview>
        ) : (
          <PlayerInput
            id="playerOne"
            label="Player 1"
            onSubmit={handleSubmit}
          />
        )}
        {playerData.playerTwoImage ? (
          <PlayerPreview
            avatar={playerData.playerTwoImage}
            username={playerData.playerTwoName}
          >
            <button className="reset" onClick={() => handleReset("playerTwo")}>
              Reset
            </button>
          </PlayerPreview>
        ) : (
          <PlayerInput
            id="playerTwo"
            label="Player 2"
            onSubmit={handleSubmit}
          />
        )}
      </div>
      {playerData.playerOneImage && playerData.playerTwoImage ? (
        <Link
          to={{
            pathname: "../battle/results",
            search: `?playerOneName=${playerData.playerOneName}&playerTwoName=${playerData.playerTwoName}`,
          }}
          className="button"
        >
          Battle
        </Link>
      ) : null}
    </div>
  );
};

export default Battle;
