/** @jsx jsx */
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { jsx } from "@emotion/core";
import { wrapper, icon, message } from "./Toast.styles";

const Success = ({ msg }) => {
  return (
    <article css={wrapper}>
      <i css={icon}>
        <FontAwesomeIcon icon="check" />
      </i>
      <span css={message}>{msg}</span>
    </article>
  );
};

Success.propTypes = {
  msg: PropTypes.string.isRequired
};

export default Success;
