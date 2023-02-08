import React from "react";
import classNames from "classnames";

import "./FormInput.styles.scss";

const FormInput = ({ label, ...inputProps }) => {
  const isFormInputEmpty = inputProps.value.length === 0;
  return (
    <div className="group">
      <input id={label} className="form-input" {...inputProps} />
      {label && (
        <label
          htmlFor={label}
          className={classNames("form-input-label", {
            shrink: !isFormInputEmpty,
          })}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
