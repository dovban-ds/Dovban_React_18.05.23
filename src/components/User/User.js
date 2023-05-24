import React from "react";
import "./User.css";

class User extends React.Component {
  constructor() {
    super();
    this.state = { name: "Stepan", age: 25, isVisible: false, text: "Show" };
  }

  handleClick = () => {
    if (this.state.isVisible) {
      this.setState({ isVisible: false, text: "Show" });
    } else {
      this.setState({ name: "Mykola", age: 30, isVisible: true, text: "Hide" });
    }
  };

  render() {
    return (
      <div>
        {this.state.isVisible && (
          <p>
            Name: {this.state.name}, age: {this.state.age}
          </p>
        )}
        <button onClick={this.handleClick}>{this.state.text}</button>
      </div>
    );
  }
}

export default User;
