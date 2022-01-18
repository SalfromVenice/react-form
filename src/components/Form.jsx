import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: ""
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
          <br />
          <h4>Gender:</h4>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            /> Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            /> Female
          </label>
        </div>
        <div className="display">
          <h2>
            You are {this.state.firstName} {this.state.lastName}</h2>
          <h2>{this.state.age} years old {this.state.gender === "male" && "boy"} {this.state.gender === "female" && "girl"}</h2>
        </div>
      </>
    );
  }
}

export default Form;
