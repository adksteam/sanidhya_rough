import React, { Component } from "react";
import Form from "./FormContainer";
import "./form.css";
class Main extends Component {
  state = {};
  render() {
    return (
      <div className="formContainer">
        <h1>CREATE/UPDATE ACCOUNT</h1>
        <Form />
      </div>
    );
  }
}

export default Main;
