import React from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import Signup from "./Signup";
import Container from "./Container";
import Message from "./Message";
import "bulma/css/bulma.css";
const fields = [
  { label: "Name", type: "text", placeholder: "e.g Alex Smith" },
  { label: "Email", type: "email", placeholder: "e.g. alexsmith@gmail.com" },
  { label: "Password", type: "password", placeholder: "password" },
];
const btn = {
  isActive: "is-active",
  isBlack: "is-black",
  isCentered: "is-centered",
  isDanger: "is-danger",
  isDark: "is-dark",
  isFocused: "is-focused",
  isGrouped: "is-grouped",
  isHovered: "is-hovered",
  isInfo: "is-info",
  isInverted: "is-inverted",
  isLarge: "is-large",
  isLight: "is-light",
  isLink: "is-link",
  isLoading: "is-loading",
  isMedium: "is-medium",
  isOutlined: "is-outlined",
  isPrimary: "is-primary",
  isRight: "is-right",
  isRounded: "is-rounded",
  isSelected: "is-selected",
  isSmall: "is-small",
  isStatic: "is-static",
  isSuccess: "is-success",
  isText: "is-text",
  isWarning: "is-warning",
  isWhite: "is-white",
};
const App = () => (
  <React.Fragment>
    <Signup btn={btn} fields={fields} />
    <Container>
      <Message class={btn.isInfo} title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <strong>Pellentesque risus mi</strong>.
      </Message>
    </Container>
  </React.Fragment>
);

export default App;
