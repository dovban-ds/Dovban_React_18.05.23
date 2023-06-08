import { useState, memo } from "react";

const PlayerInput = memo(({ id, label, onSubmit }) => {
  const [userName, setUserName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(id, userName);
  };
  return (
    <form className="column" onSubmit={handleSubmit}>
      <label className="header" htmlFor={label}>
        {label}
      </label>
      <input
        id={label}
        type="text"
        autoComplete="off"
        placeholder="Github Username"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      <button className="button" type="submit" disabled={!userName}>
        Submit
      </button>
    </form>
  );
});

export default PlayerInput;
