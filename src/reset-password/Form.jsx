/** @jsx jsx */
import React from "react";
import PropTypes from "prop-types";
import { jsx } from "@emotion/core";
import { Card, FormGroup, Label } from "reactstrap";
import { Formik, Form, Field } from "formik";
import H2 from "../app/common/text/H2";
import Button from "../app/common/Button";
import ValidInputPassword from "../app/common/ValidInputPassword";
import { initialValues, validationSchema } from "./validation";
import logo from "../app/assets/logo.svg";
import { form, card } from "./Form.styles";

const ResetPasswordForm = props => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={false}
      onSubmit={values => {
        const data = {
          email: props.email,
          token: props.token,
          password: values.password
        };
        props.onSubmit(data);
      }}
    >
      <Form css={form}>
        <div className="text-center">
          <img src={logo} alt="Logo" />
        </div>
        <Card className="big-shadow" css={card}>
          <H2>Set a new password</H2>
          <FormGroup>
            <Label htmlFor="password">New password</Label>
            <Field
              autoFocus
              name="password"
              type="password"
              placeholder="Your password"
              id="password"
              component={ValidInputPassword}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="confirmPassword">Confirm password</Label>
            <Field
              name="confirmPassword"
              type="password"
              placeholder="Your password"
              id="confirmPassword"
              component={ValidInputPassword}
            />
          </FormGroup>
          <small>
            Use 8 or more characters that contains lower and upper case, symbols
            and numbers.
          </small>
          <Button color="primary">confirm changes</Button>
        </Card>
      </Form>
    </Formik>
  );
};

ResetPasswordForm.propTypes = {
  email: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  touched: PropTypes.object,
  errors: PropTypes.object
};

ResetPasswordForm.defaultProps = {
  touched: {},
  errors: {}
};

export default ResetPasswordForm;
