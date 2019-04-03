import React from "react";

const authenticatedOptions = (changeActivePage, onSignout) => (

  <React.Fragment>

    <li className="nav-item" onClick={() => changeActivePage("add-story")}>
      <div className="nav-link">Add new story </div>
    </li>


    <li className="nav-item" onClick={() => changeActivePage("Mystories")}>
      <div className="nav-link">My Stories </div>
    </li>

    <li
      className="nav-item"
      onClick={() => changeActivePage("change-password")}
    >
      <div className="nav-link">Change Password</div>
    </li>

    <li className="nav-item" onClick={() => onSignout()}>
      <div className="nav-link">Sign Out</div>
    </li>

  </React.Fragment>
);



const unauthenticatedOptions = changeActivePage => (
  <React.Fragment>
    <li className="nav-item" onClick={() => changeActivePage("sign-in")}>
      <div className="nav-link">Sign In</div>
    </li>
    <li className="nav-item" onClick={() => changeActivePage("sign-up")}>
      <div className="nav-link">Sign Up</div>
    </li>
  </React.Fragment>
  // Fragment to not let the div ruin the style of boostrap 
);

const alwaysOptions = changeActivePage => (
  <React.Fragment>
    <li className="nav-item" onClick={() => changeActivePage("home")}>
      <div className="nav-link">Home</div>
    </li>
  </React.Fragment>
);

const Nav = ({ user, changeActivePage, onSignout }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light" >
    <div className="navbar-brand"> Writer's dream</div>
    <img src="https://www.shareicon.net/data/2016/11/15/853684_pen_512x512.png" alt="" />

    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >


      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {/* Those always appears to the user  */}
        {alwaysOptions(changeActivePage)}

        {/* Here only when signed in */}
        {user
          ? authenticatedOptions(changeActivePage, onSignout)
          : unauthenticatedOptions(changeActivePage)}
        {/* {user && (
          <li className="nav-item">
            <div className="nav-link"> Hola, {user.email.split("@")[0]}</div>
          </li>
        )} */}
      </ul>
    </div>
  </nav >
);

export default Nav;
