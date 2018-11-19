import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "emailRenseignéDansInput"
    };
  }
  updateEmailField(event) {
    this.setState({ email: event.target.value });
  }
  render() {
    return (
      <div>
        <h1>{this.state.email}</h1>
        <input
          onChange={this.updateEmailField.bind(this)}
          type="email"
          name="email"
        />
      </div>
    );
  }
}

export default SignUp;
