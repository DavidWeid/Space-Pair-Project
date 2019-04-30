import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API"

class Login extends Component {
  state = {
    login: true,
    username: "",
    email: "",
    password: "",
  }

  handleInputUpdate = (e) => {
    const keyData = e.target.name;
    const valueData = e.target.value;
    this.setState({ [keyData]: valueData })
  }

  slide = () => {
    const box = document.getElementById("box");
    let pos = 0;
    const timer = setInterval(function(){
      if (pos >= 200) {
        clearInterval(timer);
        box.style.height = "200px"
      } else {
        pos++;
        box.style.height = pos + "px"
      }
    }, 2)
  }

  switchForm = (e) => {
    e.preventDefault();
    this.setState({ login: !this.state.login })
  }

  // Might merge login and signup into same function based on if email...
  // it already works though so 

  login = (e) => {
    e.preventDefault();
    API.userLogin(this.state.email, this.state.password)
      .then(res => {
        // console.log(res)
        console.log(res.data.user);
        this.props.changeUserState(res.data.user)
      })
      .catch(err => console.log(err));
  }

  signup = (e) => {
    e.preventDefault();
    API.userSignup(this.state.username, this.state.password, this.state.email)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div id="box" className="heightUser">
        <button onClick={()=> this.slide()}>click</button>
        {!this.props.user ? (
          <div className="loginArea">
            {this.state.login ? (

              <div className="login">
                <form>
                  <div className="loginFormGroup">
                    <label>Email:</label>
                    <input
                      type="text"
                      name="email"
                      value={this.state.email}
                      onChange={(e) => this.handleInputUpdate(e)}
                    />
                  </div>
                  <div className="loginFormGroup">
                    <label>Password:</label>
                    <input
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={(e) => this.handleInputUpdate(e)}
                    />
                  </div>
                  <div className="formButtons">
                    <button
                      type="submit"
                      className="formSubBtn"
                      onClick={(e) => this.login(e)}
                    >Submit
                    </button>
                    <button
                      onClick={(e) => this.switchForm(e)}
                      className="formSubBtn"
                    >Sign Up
                    </button>
                  </div>

                </form>
              </div>

            ) : (

                <div className="signup">
                  <form>
                    <div className="loginFormGroup">
                      <label>Email:</label>
                      <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={(e) => this.handleInputUpdate(e)}
                      />
                    </div>
                    <div className="loginFormGroup">
                      <label>Username:</label>
                      <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={(e) => this.handleInputUpdate(e)}
                      />
                    </div>
                    <div className="loginFormGroup">
                      <label>Password:</label>
                      <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={(e) => this.handleInputUpdate(e)}
                      />
                    </div>
                    <div className="formButtons">
                      <button
                        type="submit"
                        className="formSubBtn"
                        onClick={(e) => this.signup(e)}
                      >Submit
                      </button>
                      <button
                        onClick={(e) => this.switchForm(e)}
                        className="formSubBtn"
                      >Login
                      </button>
                    </div>
                  </form>
                </div>)}


          </div>
        ) : (
            <div></div>
          )}

      </div>

    )
  }
}

export default Login;