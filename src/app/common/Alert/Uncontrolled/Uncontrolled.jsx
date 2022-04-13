import React from "react";
import PropTypes from "prop-types";
import { UncontrolledAlert } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Uncontrolled = ({ children, type }) => {
  let icon = "";

  switch (type) {
    case "success":
    case "sucess":
      icon = "check";
      break;
    case "danger":
      icon = "minus-circle";
      break;
    default:
      icon = "check";
      break;
  }

  return (
    <UncontrolledAlert color={type}>
      <span className="icon">
        <FontAwesomeIcon icon={icon} />
      </span>
      <span>{children}</span>
    </UncontrolledAlert>
  );
};

Uncontrolled.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired
};

export default Uncontrolled;
