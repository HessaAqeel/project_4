import React, { Component } from "react";
import Nav from "./components/Nav";
import "./App.css";
import { getUser, Signout } from "./services/AuthService";
import SigninForm from "./components/authForm.js/SigninForm";
import SignupForm from "./components/authForm.js/SignupForm";
import ChangePasswordForm from "./components/authForm.js/ChangePasswordForm";
import Home from "./components/Home";
import Profile from "./components/Profile";
// import Story from "./components/Story";

class App extends Component {
  state = {
    user: null,
    activePage: "home"
  };
  componentDidMount() {
    // check if we have a token in the local storage
    const user = getUser();
    if (user) {
      this.setState({ user });
    }
  }

  changeActivePage = activePage => {
    this.setState({ activePage });
  };
  onSignin = () => {
    this.setState({ user: getUser() });
    this.changeActivePage("profile");
  };
  onSignout = () => {
    console.log("sigin out");
    this.setState({ user: null });
    Signout();
  };

  // AddStory = () => {
  //   this.setState({ user: getUser() });
  //   this.changeActivePage("story");
  //   //   this.setState({ })
  // }
  render() {
    const { user, activePage } = this.state;
    return (
      <div class="stars">
        <div class="twinkling">


          <div>
            <Nav
              user={user}
              changeActivePage={this.changeActivePage}
              onSignout={this.onSignout}
            />

            <div className="container">
              {activePage === "home" ? <Home /> : ""}
              {activePage === "sign-in" ? (
                <SigninForm onSignin={this.onSignin} />
              ) : (
                  ""
                )}
              {activePage === "sign-up" ? (
                <SignupForm onSignin={this.onSignin} />
              ) : (
                  ""
                )}
              {activePage === "change-password" ? (
                <ChangePasswordForm changeActivePage={this.changeActivePage} />
              ) : (
                  ""
                )}
              {activePage === "profile" ? <Profile /> : ""}
            </div>
          </div>
        </div >


      </div >
    );
  }
}

export default App;
