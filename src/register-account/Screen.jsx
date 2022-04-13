/** @jsx jsx */
import React from "react";
import { connect } from "react-redux";
import { jsx } from "@emotion/core";

import AlertUncontrolled from "../app/common/Alert/Uncontrolled";
import Form from "./Form";
import { wrapper } from "./Screen.styles";
import { registerAccount } from "./service";

import {
  REGISTER_SET_SUCCESS,
  REGISTER_SET_VALIDATION_ERROR,
  REGISTER_SET_FAILURE
} from "./actions";

class RegisterAccountScreen extends React.PureComponent {
  render() {
    const { registerAccount } = this.props;

    const onSignUp = (values, { setErrors, setSubmitting }) => {
      this.setState({
        errorMessage: null,
        successMessage: null
      });
      registerAccount(values).then(({ type, payload }) => {
        switch (type) {
          case REGISTER_SET_VALIDATION_ERROR:
            setErrors(payload.errors);
            if (payload.errors.email) {
              this.setState({
                errorMessage: payload.errors.email[0],
              });
            }
            setSubmitting(false);;
            break;
          case REGISTER_SET_SUCCESS:
            this.setState({
              successMessage:
                "Great! We've sent you a confirmation email to continue signup"
            });
            break;
          case REGISTER_SET_FAILURE:
            this.setState({ errorMessage: payload.error });
            setSubmitting(false);;
            break;
        }
      });
    };

    const { errorMessage, successMessage } = this.state || {};

    return (
      <div css={wrapper}>
        {errorMessage && (
          <AlertUncontrolled type="danger">{errorMessage}</AlertUncontrolled>
        )}
        {successMessage && (
          <AlertUncontrolled type="success">{successMessage}</AlertUncontrolled>
        )}
        <Form onSignUp={onSignUp} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  registerAccount: accountData => dispatch(registerAccount(accountData))
});

export default connect(
  null,
  mapDispatchToProps
)(RegisterAccountScreen);
