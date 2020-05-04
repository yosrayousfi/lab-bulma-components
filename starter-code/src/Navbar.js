import React from "react";
import "bulma/css/bulma.css";
import CoolButton from "./CoolButton";

const Navbar = (p) => (
  <nav
    className="navbar is-transparent"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="" />
      </a>
      <button className="button is-white">Home</button>
      <div style={{ float: "right", marginRight: "10px" }}>
        <CoolButton
          className={`button my-class ${p.btn.isSmall} ${p.btn.isRounded} ${p.btn.isDanger}`}
          text="Login"
        />
        <CoolButton
          className={`button ${p.btn.isSmall} ${p.btn.isSuccess}`}
          text="SignUp"
        />
      </div>
    </div>
  </nav>
);

export default Navbar;
