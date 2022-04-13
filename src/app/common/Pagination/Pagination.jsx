/** @jsx jsx */
import React from "react";
import PropTypes from "prop-types";
import { jsx } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Pagination.styles";

const Pagination = props => {
  return (
    <article css={styles.paginationWrapper}>
      <div>
        <span>
          {props.from}-{props.to}
        </span>
        <span> of </span>
        <span>{props.total}</span>
      </div>
      <div css={styles.paginationArrows}>
        <button
          css={styles.button}
          className="arrow-left"
          disabled={props.currentPage === 1}
          onClick={props.onPreviousPage}
        >
          <i>
            <FontAwesomeIcon icon="chevron-left" />
          </i>
        </button>
        <button
          css={styles.button}
          className="arrow-right"
          disabled={props.currentPage % props.lastPage === 0}
          onClick={props.onNextPage}
        >
          <i>
            <FontAwesomeIcon icon="chevron-right" />
          </i>
        </button>
      </div>
    </article>
  );
};

Pagination.propTypes = {
  from: PropTypes.number.isRequired,
  to: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
  onNextPage: PropTypes.func.isRequired,
  onPreviousPage: PropTypes.func.isRequired
};

export default Pagination;
