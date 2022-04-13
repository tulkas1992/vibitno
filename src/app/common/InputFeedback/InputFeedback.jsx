/** @jsx jsx */
import React from "react";
import PropTypes from "prop-types";
import { jsx } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { wrapper, iconFeedback } from "./InputFeedback.styles";

const InputFeedback = props => {
  return (
    <div css={wrapper}>
      <FontAwesomeIcon css={iconFeedback} icon="exclamation-triangle" />
      <span>{props.children}</span>
    </div>
  );
};

InputFeedback.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired
};

InputFeedback.defaultProps = {
  children: null,
};

export default InputFeedback;
