import React, { FC, ReactElement } from "react";
import { useState, memo, ChangeEvent, FormEvent } from "react";

interface IProps {
  id: string;
  label: string;
  onSubmit: (id: string, userName: string) => void;
}

const PlayerInput: FC<IProps> = memo(
  ({ id, label, onSubmit }): ReactElement => {
    const [userName, setUserName] = useState<string>("");

    const handleSubmit = (event: FormEvent): void => {
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
          onChange={(event: ChangeEvent<HTMLInputElement>): void =>
            setUserName(event.target.value)
          }
        />
        <button className="button" type="submit" disabled={!userName}>
          Submit
        </button>
      </form>
    );
  }
);

export default PlayerInput;
