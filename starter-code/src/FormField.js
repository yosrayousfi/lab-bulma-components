import React from "react";
import "bulma/css/bulma.css";
const FormField = (p) => (
  <div className="field" style={{ width: "40%" }}>
    <label className="label">{p.label}</label>
    <div className="control">
      <input className="input" type={p.text} placeholder={p.placeholder} />
    </div>
  </div>
);

export default FormField;
