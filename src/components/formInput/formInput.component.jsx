import React from "react";
import "./formInput.styles.scss";
import { CustomButton } from "../button/button.component";

export const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input
      type="email"
      className="form-input"
      onChange={handleChange}
      {...otherProps}
    />
  </div>
);
