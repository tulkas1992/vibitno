/** @jsx jsx */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { jsx } from "@emotion/core";
import Form from "./Form";
import AlertUncontrolled from "../app/common/Alert/Uncontrolled";
import { SET_SESSION_ERROR } from "../app/session/session.actions";
import * as loginActions from "../app/session/session.actionCreators";
import { wrapper } from "./Screen.styles";
import routes from "../app/config/routes";

class LoginScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loggingIn: false,
      loginOk: false,
    };

    this.onLogin = this.onLogin.bind(this);
  }

  onLogin(user) {
    const {
      loginActions: {
        login,
        clearSessionError,
      },
      history: {
        replace,
      },
    } = this.props;

    this.setState({ loggingIn: true });
    clearSessionError();
    login(user)
      .then((result) => {
        // Only if the login failed do we need to re-enable the button
        if (result.type === SET_SESSION_ERROR) {
          this.setState({ loggingIn: false });
        } else if (result.type === 'CURRENT_USER_SET') {
          this.setState({ loginOk: true });
          setTimeout(() => replace(routes.dashboard), 500);
        }
      });
  }

  render() {
    const {
      auth,
    } = this.props;

    const {
      loggingIn,
      loginOk,
    } = this.state;

    return (
      <div css={wrapper}>
        {auth.errorAuth && (
          <AlertUncontrolled type="danger">{auth.errorMessage}</AlertUncontrolled>
        )}
        {loginOk && (
          <AlertUncontrolled type="success">You've been logged in!</AlertUncontrolled>
        )}
        <Form onLogin={this.onLogin} disableLogin={loggingIn} />
      </div>
    );
  }
}

LoginScreen.propTypes = {
  auth: PropTypes.object.isRequired,
  loginActions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginActions: bindActionCreators(loginActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
