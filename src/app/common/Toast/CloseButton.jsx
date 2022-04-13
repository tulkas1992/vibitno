import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CloseButton = ({ closeToast }) => {
  return (
    <i onClick={closeToast}>
      <FontAwesomeIcon icon="times" />
    </i>
  );
};

export default CloseButton;
