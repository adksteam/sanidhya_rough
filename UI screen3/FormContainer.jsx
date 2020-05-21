import React, { Component } from "react";
import Input from "./Input";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastName: "",
      dob: "",
      address: "",
      city: "",
      zipCode: "",
      state: "",
      country: "",
      mobileNo: "",
      email: "",
      password: "",
      aadhaarNo: "",
      panNo: "",
    };

    this.initialState = this.state;
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFormSubmit() {
    /*
     */
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleReset() {
    this.setState(this.initialState);
  }
  render() {
    return (
      <form className="formContainer">
        <label>
          First Name
          <input
            name="firstName"
            type="text"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Last Name
          <input
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Date of Birth
          <input
            name="dob"
            type="text"
            value={this.state.dob}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Address
          <input
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          City
          <input
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Zip Code
          <input
            name="zipCode"
            type="number"
            value={this.state.zipCode}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          State
          <input
            name="state"
            value={this.state.state}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Country
          <input
            name="country"
            value={this.state.country}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Mobile no.
          <input
            name="mobileNo"
            type="number"
            value={this.state.mobileNo}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Email
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Password
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Aadhaar no.
          <input
            name="aadhaarNo"
            type="number"
            value={this.state.aadhaarNo}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Pan no.
          <input
            name="panNo"
            type="text"
            value={this.state.panNo}
            onChange={this.handleChange}
          />
        </label>
        <div>
          <button onClick={this.handleFormSubmit}>Submit</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </form>
    );
  }
}

export default Form;
