import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatePlayerData } from "../../store/battle/battle.slice";

const Battle = () => {
  const dispatch = useDispatch();
  const { playerOneName, playerOneImage, playerTwoName, playerTwoImage } =
    useSelector((state) => state.battleReducer.data);

  const handleSubmit = (id, userName) => {
    const image = new Image();
    image.onload = () => {
      dispatch(
        updatePlayerData({
          id,
          name: userName,
          image: `https://github.com/${userName}.png?size=200`,
        })
      );
    };
    image.onerror = () => {
      alert("User not found!");
    };
    image.src = `https://github.com/${userName}.png?size=200`;
  };

  const handleReset = (id) => {
    dispatch(
      updatePlayerData({
        id,
        name: "",
        image: null,
      })
    );
  };

  return (
    <div>
      <div className="row">
        {playerOneImage ? (
          <PlayerPreview avatar={playerOneImage} username={playerOneName}>
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
        {playerTwoImage ? (
          <PlayerPreview avatar={playerTwoImage} username={playerTwoName}>
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
      {playerOneImage && playerTwoImage ? (
        <Link
          to={{
            pathname: "../battle/results",
            search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`,
          }}
          className="button"
          onClick={() => {
            handleReset("playerTwo");
            handleReset("playerOne");
          }}
        >
          Battle
        </Link>
      ) : null}
    </div>
  );
};

export default Battle;
