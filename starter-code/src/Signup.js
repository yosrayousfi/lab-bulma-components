import React from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";
// import React, {Fragment} from "react";

const Signup = (p) => (
  <React.Fragment>
    <Navbar  btn={p.btn}/>
    {p.fields.map((field, i) => (
      <FormField
        key={i}
        label={field.label}
        type={field.type}
        placeholder={field.placeholder}
      />
    ))}
    <CoolButton
      className={`button ${p.btn.isSmall} ${p.btn.isSuccess}`}
      text="Submit"
    />
  </React.Fragment>
);

export default Signup;
