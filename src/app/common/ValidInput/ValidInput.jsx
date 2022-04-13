import React from "react";
import PropTypes from "prop-types";
import { Input } from "reactstrap";
import { ErrorMessage } from "formik";
import InputFeedback from "../InputFeedback";

const ValidInput = ({ field, form: { submitCount, touched, errors }, ...props }) => {
  const errorClass = submitCount > 0 && touched[field.name] && errors[field.name] && "has-error";

  return (
    <React.Fragment>
      <Input {...field} {...props} className={errorClass} />
      {errorClass && (
        <ErrorMessage name={field.name} component={InputFeedback} />
      )}
    </React.Fragment>
  );
};

ValidInput.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object
};

export default ValidInput;
