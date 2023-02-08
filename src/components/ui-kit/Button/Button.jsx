import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from "classnames";

import "./Button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => (
  // eslint-disable-next-line react/button-has-type
  <button
    className={classNames("button-container", {
      "google-sign-in": buttonType === BUTTON_TYPE_CLASSES.google,
      inverted: buttonType === BUTTON_TYPE_CLASSES.inverted,
    })}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;
