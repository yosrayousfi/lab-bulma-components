import React from "react";
import "bulma/css/bulma.css";
const Message = (p) => (
  <article className={`message ${p.class}`}>
    <div className="message-header">
      <p>{p.title}</p>
      <button className="delete" aria-label="delete"></button>
    </div>
    <div className="message-body">{p.children} </div>
  </article>
);

export default Message;
