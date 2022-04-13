/** @jsx jsx */
import React from "react";
import PropTypes from "prop-types";
import { jsx } from "@emotion/core";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Card, FormGroup, Label } from "reactstrap";

import routes from "../../app/config/routes";
import Button from "../../app/common/Button";
import H2 from "../../app/common/text/H2";
import ValidInput from "../../app/common/ValidInput";
import ValidInputPassword from "../../app/common/ValidInputPassword";
import logo from "../../app/assets/logo.svg";
import styles from "./Form.styles";
import validation from "./validation";

const initialValues = fields =>
  Object.keys(fields).reduce((memo, name) => ({ [name]: "", ...memo }), {});

const RegisterAccountForm = ({ onSignUp }) => (
  <Formik
    initialValues={initialValues(validation.fields)}
    validationSchema={validation}
    onSubmit={onSignUp}
  >
    {({ errors, touched, isValid, isSubmitting, submitCount }) => (
      <Form css={styles.form}>
        <div className="text-center">
          <img src={logo} alt="Logo" />
        </div>
        <Card className="big-shadow" css={styles.card}>
          <H2>Welcome to Vibitno!</H2>
          <p css={styles.signupText}>
            Register to get access to the only sales system that will boost your
            productivity, by giving you visibility and accountability through
            all the sales process in a systematically and repeatable way!
          </p>
          <FormGroup>
            <Label>First Name</Label>
            <Field
              autoFocus
              type="text"
              name="forename"
              placeholder="John"
              component={ValidInput}
            />
          </FormGroup>
          <FormGroup>
            <Label>Last Name</Label>
            <Field
              type="text"
              name="surname"
              placeholder="Doe"
              component={ValidInput}
            />
          </FormGroup>
          <FormGroup className="full">
            <Label>E-mail</Label>
            <Field
              name="email"
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
          <FormGroup>
            <Label>Confirm Password</Label>
            <Field
              type="password"
              name="passwordConfirmation"
              placeholder="Password"
              component={ValidInputPassword}
            />
          </FormGroup>
          <small className="mt-1">
            Use 8 or more characters that contains lower and upper case, symbols
            and numbers.
          </small>
          <Link to={routes.signin} css={styles.loginLink}>
            Have an account? <strong>Log in</strong>
          </Link>
          <Button
            type="submit"
            color="primary"
            disabled={isSubmitting}
          >
            Sign Up
          </Button>
        </Card>
        <small css={styles.termsAndPrivacy}>
          By signing up, you accept our Terms of Service and Privacy Policy
        </small>
      </Form>
    )}
  </Formik>
);

RegisterAccountForm.propTypes = {
  onSignUp: PropTypes.func.isRequired
};

export default RegisterAccountForm;
