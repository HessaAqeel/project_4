import React, { Component } from "react";
import Nav from "./components/Nav";
import "./App.css";
import { getUser, Signout } from "./services/AuthService";
import SigninForm from "./components/authForm.js/SigninForm";
import SignupForm from "./components/authForm.js/SignupForm";
import ChangePasswordForm from "./components/authForm.js/ChangePasswordForm";
import Home from "./components/Home";
import Profile from "./components/Profile";
import AddStory from "./components/AddStory";
import Story from "./components/Story";
import Mystories from "./components/Mystories";
import EditStory from "./components/EditStory";

class App extends Component {
  state = {
    user: null,
    activePage: "home",
    activeStroy: null,
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

  setActiveStroy = activeStroy => {
    this.setState({ activeStroy });
  };

  setOneActiveStroy = activeStroy => {
    this.setState({ activeStroy });
  };

  // View one resource 
  setViewActiveStroy = activeStroy => {
    this.setState({ activeStroy });
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
  //   this.changeActivePage("add story");
  //    this.setState({ })
  // }

  render() {
    const { user, activePage } = this.state;
    return (

      // <div class="stars">
      //   <div class="twinkling">

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
          {/* {activePage === "story" ? (
            <Story Story1={this.setViewActiveStroy} />
          ) : (
              ""
            )} */}

          {activePage === "profile" ? <Profile /> : ""}
          {activePage === "add-story" ? <AddStory changeActivePage={this.changeActivePage} setActiveStroy={this.setActiveStroy} /> : ""}
          {activePage === "edit-story" ? <EditStory changeActivePage={this.changeActivePage} story={this.state.activeStroy} /> : ""}

          {activePage === "story" ? <Story story={this.state.activeStroy} changeActivePage={this.changeActivePage} /> : ""}
          {activePage === "Mystories" ? <Mystories Mystories={this.state.setOneActiveStroy} /> : ""}


        </div>
      </div>

      //   </div >


      // </div >
    );
  }
}

export default App;
