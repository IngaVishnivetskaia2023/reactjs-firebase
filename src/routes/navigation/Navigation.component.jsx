import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "assets/crown.svg";

import "./Navigation.styles.scss";

const NavigationBar = () => (
  <>
    <div className="navigation">
      <Link to="/" className="logo-container">
        <CrownLogo className="logo" />
      </Link>
      <div className="nav-links-container">
        <Link to="/shop" className="nav-link">
          Shop
        </Link>
        <Link to="/auth" className="nav-link">
          Sign in
        </Link>
      </div>
    </div>
    <Outlet />
  </>
);

export default NavigationBar;
