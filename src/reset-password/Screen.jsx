/** @jsx jsx */
import React from "react";
import PropTypes from "prop-types";
import queryString from "query-string";
import { jsx } from "@emotion/core";
import { toast } from "react-toastify";
import routes from "../app/config/routes";
import * as service from "./service";
import Form from "./Form";
import Toast from "../app/common/Toast";
import { wrapper } from "./Screen.styles";

const Screen = props => {
  const values = queryString.parse(props.location.search);
  const { email, token } = values;

  const changePasswordOk = message => {
    toast.success(<Toast type="success" msg={message} />, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false
    });

    props.history.push(routes.signin);
  };

  const changePasswordError = message => {
    toast.error(<Toast type="error" msg={message} />, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false
    });
  };

  const handleChangePassword = data => {
    service
      .changePassword(data)
      .then(response => {
        const { message } = response.data;
        changePasswordOk(message);
      })
      .catch(err => {
        const { message } = err.response.data;
        changePasswordError(message);
      });
  };

  return (
    <div css={wrapper}>
      <Form email={email} token={token} onSubmit={handleChangePassword} />
    </div>
  );
};

Screen.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Screen;
