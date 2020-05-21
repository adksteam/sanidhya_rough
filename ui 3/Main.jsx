import React, { Component } from "react";
import Form from "./FormContainer";
import "./form.css";
class Main extends Component {
  state = {};
  render() {
    return (
      <div className="formContainer">
        <div className="header">
          <h1>Create / Update Account</h1>
        </div>
        <Form />
      </div>
    );
  }
}

export default Main;
