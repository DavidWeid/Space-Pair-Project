import React, { Component } from "react";
// import API from "../../utils/API";
import Login from "../../components/Login";
import API from "../../utils/API";

class Profile extends Component {
  state = {
    user: false
  };

  componentWillMount() {
    API.userCheck()
      .then(result => console.log(result.data))
      .catch(err => console.log(err))
  }

  shouldComponentUpdate() {
    this.sendToPage()
    return true
  }

  changeUserState = (user) => {
    if (user) {
      return this.setState({ user: true })
    }
    return this.setState({ user: false })
  }
  
  sendToPage() {
    console.log("updated");
    window.location.pathname = "/"
    return true;
  }

  render() {
    return (
      <div>
        <h1>Profile Page</h1>
        <Login changeUserState={this.changeUserState} />
      </div>
    );
  }
}

export default Profile;
