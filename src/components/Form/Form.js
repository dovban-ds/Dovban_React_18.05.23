import "./Form.css";
import React from "react";
import validation from "./useForm";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      disable: true,
      firstNameValid: false,
      lastNameValid: false,
      emailValid: false,
      passwordValid: false,
    };
  }

  handleChanges = (event, field) => {
    this.setState(() => {
      return { [field]: [event.target.value] };
    });
    const isValid = validation(field, [event.target.value]);
    this.setState({ [`${field}Valid`]: isValid });
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
            onChange={(event) => this.handleChanges(event, "firstName")}
          />
          {!this.state.firstNameValid && (
            <div>Please enter a valid first name</div>
          )}
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={(event) => this.handleChanges(event, "lastName")}
          />
          {!this.state.lastNameValid && (
            <div>Please enter a valid last name</div>
          )}
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={(event) => this.handleChanges(event, "email")}
          />
          {!this.state.emailValid && (
            <div>Please enter a valid email address</div>
          )}
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={(event) => this.handleChanges(event, "password")}
          />
          {!this.state.passwordValid && (
            <div>Please enter a valid password</div>
          )}
          {this.state.firstNameValid &&
          this.state.emailValid &&
          this.state.lastNameValid &&
          this.state.passwordValid ? (
            <button onClick={(event) => this.buttonHandler(event)}>
              Submit
            </button>
          ) : (
            <button onClick={(event) => this.buttonHandler(event)} disabled>
              Submit
            </button>
          )}
        </form>
      </div>
    );
  }
}
