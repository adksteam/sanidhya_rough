import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validateFullForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
};

class Form extends Component {
  customer = {
    id: "",
    name: "",
    email: "",
    address: "",
    accountType: "",
    accountNo: "",
    accountBalance: "",
  };
  constructor(props) {
    super(props);

    this.state = {
      item: this.customer,
      errors: {
        id: "",
        name: "",
        email: "",
        address: "",
        accountType: "",
        accountNo: "",
        accountBalance: "",
      },
    };
    this.initialState = this.state;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "name":
        errors.name =
          value.length < 5 ? "Full Name should be min. 5 characters !" : "";
        break;

      case "email":
        errors.email = validEmailRegex.test(value)
          ? ""
          : "Email is not valid !";
        break;

      case "address":
        errors.address =
          value.length < 6 ? "Address should be min. 6 characters !" : "";
        break;

      case "accountNo":
        errors.accountNo = value.length !== 8 ? "Enter 8 character no. !" : "";
        break;

      case "accountType":
        errors.accountType =
          value === "None" ? "Please select an Account Type !" : "";
        break;
    }

    let item = { ...this.state.item };
    item[name] = value;
    this.setState({ errors, item });
    //this.setState({ errors, [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (validateFullForm(this.state.errors)) {
      console.info("Valid Form");

      /*
      Call API method
      */
    } else {
      console.error("Invalid Form");
    }
  };

  handleReset() {
    this.setState(this.initialState);
  }

  render() {
    const { item } = this.state;
    const { errors } = this.state;
    return (
      <form className="formContainer" onSubmit={this.handleFormSubmit}>
        <label>
          Customer Id
          <input
            name="id"
            type="text"
            value={item.id}
            //onChange={this.handleChange}
          />
        </label>
        <br />

        <span className="error">{errors.name}</span>
        <label>
          Full Name<span className="mandatory">*</span>
          <input
            name="name"
            type="text"
            value={item.name}
            onChange={this.handleChange}
          />
        </label>

        <br />
        <span className="error">{errors.address}</span>
        <label>
          Address<span className="mandatory">*</span>
          <input
            name="address"
            value={item.address}
            onChange={this.handleChange}
          />
        </label>

        <br />
        <span className="error">{errors.email}</span>
        <label>
          Email Id<span className="mandatory">*</span>
          <input name="email" value={item.email} onChange={this.handleChange} />
        </label>

        <br />
        <span className="error">{errors.accountNo}</span>
        <label>
          Account no.<span className="mandatory">*</span>
          <input
            name="accountNo"
            type="number"
            value={item.accountNo}
            onChange={this.handleChange}
          />
        </label>

        <br />
        <span className="error">{errors.accountType}</span>
        <label>
          Select Account Type <span className="mandatory">*</span>
          <select
            class="list"
            name="accountType"
            value={item.accountType}
            onChange={this.handleChange}
          >
            <option value="None">None</option>
            <option value="Savings Account">Savings Account</option>
            <option value="Current Account">Current Account</option>
            <option value="Fixed Deposit">Fixed Deposit</option>
          </select>
        </label>

        <br />

        <label>
          Account Balance
          <input
            name="accountBalance"
            type="text"
            value={item.accountBalance}
            //onChange={this.handleChange}
          />
        </label>
        <br />
        <div className="submit">
          <button onClick={this.handleSubmit}>SAVE DETAILS</button>
          <button>BACK TO CUSTOMER LIST</button>
          <button onClick={this.handleReset}>RESET</button>
        </div>
      </form>
    );
  }
}

export default Form;
