import React, { ReactElement } from "react";
import { memo } from "react";

interface IPlayerPreview {
  avatar: string;
  username: string | null;
  children: any;
}

const PlayerPreview = memo(
  ({ avatar, username, children }: IPlayerPreview): ReactElement => {
    return (
      <div>
        <div className="column">
          <img src={avatar} alt="avatar" className="avatar" />
          <h3>{username}</h3>
        </div>
        {children}
      </div>
    );
  }
);

export default PlayerPreview;
