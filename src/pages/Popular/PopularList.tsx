import React, { FC, ReactElement } from "react";
import { IRepos } from "../../store/popular/popular.types";

const PopularList: FC = ({ repos }: any): ReactElement => {
  return (
    <ul className="popular-list">
      {repos.map((repo: IRepos, index: number): ReactElement => {
        return (
          <li key={repo.id} className="popular-item">
            <div className="popular-rank">#{index + 1}</div>
            <ul className="space-list-items">
              <li>
                <img
                  className="avatar"
                  src={repo.owner.avatar_url}
                  alt="avatar"
                ></img>
              </li>
              <li>
                <a href={repo.html_url}>{repo.name}</a>
              </li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default PopularList;
