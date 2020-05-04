import React from "react";
import "bulma/css/bulma.css";
const CoolButton = (p) => (
  <button className={p.className} style={{ marginRight: "10px" }}>
    {p.text}
  </button>
);

export default CoolButton;
