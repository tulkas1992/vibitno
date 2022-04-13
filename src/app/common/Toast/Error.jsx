/** @jsx jsx */
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { jsx } from "@emotion/core";
import { wrapper, icon, message } from "./Toast.styles";

const Error = ({ msg }) => {
  return (
    <article css={wrapper}>
      <i css={icon}>
        <FontAwesomeIcon icon="minus-circle" />
      </i>
      <span css={message}>{msg}</span>
    </article>
  );
};

Error.propTypes = {
  msg: PropTypes.string.isRequired
};

export default Error;
