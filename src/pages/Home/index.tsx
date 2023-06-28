import React from "react";
import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

const Home: FC = (): ReactElement => {
  return (
    <div className="home-container">
      <h1>Github Battle: Battle your friends ... and stuff</h1>
      <Link to="/battle" className="button">
        Battle
      </Link>
    </div>
  );
};

export default Home;
