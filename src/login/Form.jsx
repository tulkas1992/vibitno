/** @jsx jsx */
import React from "react";
import PropTypes from "prop-types";
import { jsx } from "@emotion/core";
import { Card, FormGroup, Label } from "reactstrap";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import H2 from "../app/common/text/H2";
import Button from "../app/common/Button";
import ValidInput from "../app/common/ValidInput";
import ValidInputPassword from "../app/common/ValidInputPassword";
import logo from "../app/assets/logo.svg";
import routes from "../app/config/routes";
import { card, form, noAccount, forgotPassword } from "./Form.styles";

const initialValues = {
  username: "",
  password: ""
};

const validationSchema = Yup.object({
  username: Yup.string()
    .email("Inavlid email")
    .required("E-mail is a required field"),
  password: Yup.string().required("Password is a required field")
});

const Login = props => {
  const disable = props.disableLogin || (props.dirty &&
      Object.keys(props.touched).length > 0 &&
      Object.keys(props.errors).length > 0)
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => {
        const user = {
          username: values.username,
          password: values.password
        };
        props.onLogin(user);
      }}
    >
      {props => {
        return (
          <Form css={form}>
            <div className="text-center">
              <img src={logo} alt="Logo" />
            </div>
            <Card className="big-shadow" css={card}>
              <H2>Sign in to Vibitno</H2>
              <FormGroup>
                <Label>E-mail</Label>
                <Field
                  name="username"
                  autoFocus
                  type="email"
                  placeholder="johndoe@email.com"
                  component={ValidInput}
                />
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  component={ValidInputPassword}
                />
              </FormGroup>
              <Link to={routes.forgotPassword} className="link" css={forgotPassword}>
                Forgot your password?
              </Link>
              <Button
                color="primary"
                type="submit"
                disabled={disable}
              >
                login
              </Button>
            </Card>
            <div className="text-center">
              <Link to={routes.registerAccount} className="link" css={noAccount}>
                Don&#39;t have an account? <strong>Signup</strong>
              </Link>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
  dirty: PropTypes.bool,
  touched: PropTypes.object,
  errors: PropTypes.object,
  disableLogin: PropTypes.bool,
};

Login.defaultProps = {
  dirty: false,
  touched: {},
  errors: {},
  disableLogin: false,
};

export default Login;
