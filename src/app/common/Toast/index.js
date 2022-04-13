import React from "react";
import PropTypes from "prop-types";
import Error from "./Error";
import Success from "./Success";

const Toast = ({ type, msg }) => {
  let Component;
  switch (type) {
    case "error":
      Component = <Error msg={msg} />;
      break;
    case "success":
      Component = <Success msg={msg} />;
      break;
    default:
      break;
  }

  return Component;
};

Toast.propTypes = {
  type: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired
};

export default Toast;
