import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";

class Login extends Component {
  state = {
    login: true,
    show: false,
    username: "",
    email: "",
    password: "",
    user: true
  };

  componentDidMount() {
    this.checkUser()
  }

  checkUser = () => {
    API.userCheck()
      .then(result => {
        console.log(result);
        if (result.data.user) {
          this.setState({ user : true})
        } else {
          this.setState({user: false})
        }
        
      })
      .catch(err => console.log(err));
  }

  handleInputUpdate = e => {
    const keyData = e.target.name;
    const valueData = e.target.value;
    this.setState({ [keyData]: valueData });
  };

  showLogin = e => {
    e.preventDefault();
    if (!this.props.user) {
      this.setState({ show: !this.state.show });
    }
  };

  switchForm = e => {
    e.preventDefault();
    this.setState({ login: !this.state.login });
  };

  // Might merge login and signup into same function based on if email...
  // it already works though so

  login = e => {
    e.preventDefault();
    console.log("login button pressed");
    API.userLogin(this.state.email, this.state.password)
      .then(res => {
        console.log(res)
        console.log(res.data.user);
        this.setState({ user: true })
        this.props.changeUserState(res.data.user);
        this.setState({ show: false });
      })
      .catch(err => {
        console.log("this is from login component");
        alert("You have entered incorrect password or email");
        this.setState({ password: "" });
        console.log(err);
      });
  };

  signup = e => {
    e.preventDefault();
    API.userSignup(this.state.username, this.state.password, this.state.email)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="heightUser">
        {this.state.user ? (
          <div className="banLink" onClick={e => this.showLogin(e)}>
            <span>
              <i className="fas fa-user-astronaut fa-lg" />
            </span>
          </div>
        ) : (
            <div className="banLink" onClick={e => this.showLogin(e)}>
              Login
          </div>
          )}

        {!this.state.user ? (
          <div
            id="box"
            className="loginArea"
            style={{ display: this.state.show ? "block" : "none" }}
          >
            {this.state.login ? (
              <div id="loginForm" className="login form-padding">
                <form>
                  <div className="loginFormGroup">
                    <label>Email:</label>
                    <input
                      type="text"
                      name="email"
                      value={this.state.email}
                      onChange={e => this.handleInputUpdate(e)}
                    />
                  </div>
                  <div className="loginFormGroup">
                    <label>Password:</label>
                    <input
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={e => this.handleInputUpdate(e)}
                    />
                  </div>
                  <div className="formButtons">
                    <button
                      type="submit"
                      className="formSubBtn"
                      onClick={e => this.login(e)}
                    >
                      Submit
                    </button>
                    <button
                      onClick={e => this.switchForm(e)}
                      className="formSubBtn"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            ) : (
                <div id="signupForm" className="signup form-padding">
                  <form>
                    <div className="loginFormGroup">
                      <label>Email:</label>
                      <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={e => this.handleInputUpdate(e)}
                      />
                    </div>
                    <div className="loginFormGroup">
                      <label>Username:</label>
                      <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={e => this.handleInputUpdate(e)}
                      />
                    </div>
                    <div className="loginFormGroup">
                      <label>Password:</label>
                      <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={e => this.handleInputUpdate(e)}
                      />
                    </div>
                    <div className="formButtons">
                      <button
                        type="submit"
                        className="formSubBtn"
                        onClick={e => this.signup(e)}
                      >
                        Submit
                    </button>
                      <button
                        onClick={e => this.switchForm(e)}
                        className="formSubBtn"
                      >
                        Login
                    </button>
                    </div>
                  </form>
                </div>
              )}
          </div>
        ) : (
            <div />
          )}
      </div>
    );
  }
}

export default Login;
