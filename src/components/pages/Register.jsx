import React, { Component } from "react";

export default class Login extends Component {
  state = {
    first: "",
    last: "",
    username: "",
    pass: "",
    confirm: "",
  };

  handleChange = (evt) => {
    const fields = Object.assign({}, this.state);
    fields[evt.target.name] = evt.target.value;
    this.setState({ ...fields });
  };

  render() {
    return (
      <div className="flex justify-center">
        <div className="flex flex-col absolute top-[30%] shadow-lg border-[2px] rounded-lg p-5 w-[60%] ">
          <text className="text-2xl">Register</text>
          <div className="flex mt-3">
            <input
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#35B639] focus:border-[#35B639] ease-linear duration-200 mt-3"
              placeholder="First Name"
              name="first"
              value={this.state.first}
              onChange={this.handleChange}
            />
            <input
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#35B639] focus:border-[#35B639] ease-linear duration-200 mt-3"
              placeholder="Last Name"
              name="last"
              value={this.state.last}
              onChange={this.handleChange}
            />
          </div>
          <div className="flex mt-3">
            <input
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#35B639] focus:border-[#35B639] ease-linear duration-200 mt-3"
              placeholder="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#35B639] focus:border-[#35B639] ease-linear duration-200 mt-3"
              placeholder="password"
              name="pass"
              value={this.state.pass}
              onChange={this.handleChange}
              required
            />
            <input
              className="border-[2px] rounded-lg w-[100%] p-2 outline-[#35B639] focus:border-[#35B639] ease-linear duration-200 mt-3"
              placeholder="Confirm password"
              name="pass"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
          </div>
          <input
            className="btn mt-7 hover:scal-[1.02]"
            type="button"
            value="Register"
          />
        </div>
      </div>
    );
  }
}
