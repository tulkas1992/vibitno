/** @jsx jsx */
import React from "react";
import PropTypes from "prop-types";
import { jsx } from "@emotion/core";
import { UncontrolledTooltip } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ItemsSelected.styles";

const ItemsSelected = ({ count }) => {
  return (
    <div css={styles.wrapper}>
      {count > 0 && (
        <React.Fragment>
          <span css={styles.count}>{count}</span>
          <span>Selected</span>
        </React.Fragment>
      )}
      <div css={styles.actionsWrapper}>
        <button
          id="buttonEdit"
          css={styles.button}
          disabled={count > 1 || count === 0}
        >
          <i>
            <FontAwesomeIcon icon="pencil-alt" />
          </i>
          <UncontrolledTooltip delay={0} placement="top" target="buttonEdit">
            Edit
          </UncontrolledTooltip>
        </button>
        <button id="buttonDelete" css={styles.button} disabled={count === 0}>
          <i>
            <FontAwesomeIcon icon="trash-alt" />
          </i>
          <UncontrolledTooltip delay={0} placement="top" target="buttonDelete">
            Delete
          </UncontrolledTooltip>
        </button>
      </div>
    </div>
  );
};

ItemsSelected.propTypes = {
  count: PropTypes.number.isRequired
};

export default ItemsSelected;
