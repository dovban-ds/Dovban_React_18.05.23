import React from "react";
import "./User.css";

class User extends React.Component {
  constructor() {
    super();
    this.state = { name: "Stepan", age: 25, isVisible: false, text: "Show" };
  }

  handleShow = () => {
    this.state.isVisible
      ? this.setState({ isVisible: false, text: "Show" })
      : this.setState({ isVisible: true, text: "Hide" });
  };

  handleChange = () => {
    this.state.name === "Stepan"
      ? this.setState({ name: "Mykola", age: 30 })
      : this.setState({ name: "Stepan", age: 25 });
  };

  render() {
    return (
      <div>
        {this.state.isVisible && (
          <>
            <p>
              Name: {this.state.name}, age: {this.state.age}
            </p>
            <button onClick={this.handleChange}>Change user</button>
          </>
        )}
        <button onClick={this.handleShow}>{this.state.text}</button>
      </div>
    );
  }
}

export default User;
