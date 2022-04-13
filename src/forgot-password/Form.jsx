/** @jsx jsx */
import React from "react";
import PropTypes from "prop-types";
import { jsx } from "@emotion/core";
import { Card, FormGroup, Label } from "reactstrap";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import routes from "../app/config/routes";
import H2 from "../app/common/text/H2";
import Paragraph from "../app/common/text/Paragraph";
import Button from "../app/common/Button";
import ValidInput from "../app/common/ValidInput";
import logo from "../app/assets/logo.svg";
import { form, card, instructionText, backToLogin } from "./Form.styles";

const initialValues = {
  email: ""
};

const schema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("E-mail is a required field")
});

const ForgotPassowrd = props => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={values => {
        props.onSendEmail(values.email);
      }}
    >
      <Form css={form} noValidate>
        <div className="text-center">
          <img src={logo} alt="Logo" />
        </div>
        <Card className="big-shadow" css={card}>
          <H2>Reset your password</H2>
          <Paragraph css={instructionText}>
            Enter your email address below and we&#39;ll send you a link to help
            you bounce back
          </Paragraph>
          <FormGroup>
            <Label>E-mail</Label>
            <Field
              type="email"
              autoFocus
              name="email"
              placeholder="johndoe@email.com"
              component={ValidInput}
            />
          </FormGroup>
          <Button color="primary" type="submit">
            send link to e-mail
          </Button>
          <Link
            to={routes.signin}
            className="link text-center"
            css={backToLogin}
          >
            Go back to Login
          </Link>
        </Card>
      </Form>
    </Formik>
  );
};

ForgotPassowrd.propTypes = {
  onSendEmail: PropTypes.func.isRequired,
  dirty: PropTypes.bool,
  touched: PropTypes.object,
  errors: PropTypes.object
};

ForgotPassowrd.defaultProps = {
  dirty: false,
  touched: {},
  errors: {}
};

export default ForgotPassowrd;
