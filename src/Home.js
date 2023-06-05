import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Github Battle: Battle your friends ... and stuff</h1>
      <Link to="/Dovban_React_18.05.23/battle" className="button">
        Battle
      </Link>
    </div>
  );
};

export default Home;
