import "./Form.css";
import React from "react";
import Validation from "./Validation";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      btnAble: false,
    };
  }

  handleChange = (event, field) => {
    this.setState(() => {
      return { [field]: [event.target.value] };
    });
  };

  validArr = (result) => {
    // const check = result.every((item) =>
    //   item.props.children.includes("properly")
    // );
    if (result.length === 4) {
      return result.every((item) => item.key % 2 !== 0)
        ? this.setState({ btnAble: true })
        : null;
    }
  };

  buttonHandler = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <div className="form-box">
        <form>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={(event) => this.handleChange(event, "firstName")}
          />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={(event) => this.handleChange(event, "lastName")}
          />
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={(event) => this.handleChange(event, "email")}
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={(event) => this.handleChange(event, "password")}
          />
          {this.state.email ||
          this.state.password ||
          this.state.firstName ||
          this.state.lastName ? (
            <Validation state={this.state} validArr={this.validArr} />
          ) : null}
          <button
            onClick={(event) => this.buttonHandler(event)}
            className={this.state.btnAble ? "avaliable" : "isntAvaliable"}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
