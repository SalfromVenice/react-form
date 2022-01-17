import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <>
        <div className="form">
          <input
            placeholder="First Name"
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="Last Name"
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="Age"
            type="text"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
        </div>
        <div className="display">
          <h2>
            You are {this.state.firstName} {this.state.lastName}</h2>
          <h2>{this.state.age} years old</h2>
        </div>
      </>
    );
  }
}

export default Form;
