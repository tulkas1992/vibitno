import React from "react";
import PropTypes from "prop-types";
import { Input } from "reactstrap";
import { ErrorMessage } from "formik";
import ToggleInputType from "../ToggleInputType";
import InputFeedback from "../InputFeedback";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ValidInputPassword = ({
  field,
  form: { submitCount, touched, errors },
  type,
  ...props
}) => {
  const errorClass = submitCount > 0 && touched[field.name] && errors[field.name] && "has-error";

  return (
    <React.Fragment>
      <div className="password-wrapper">
        <ToggleInputType
          initialType={type}
          toggleTo="text"
          initialIcon="eye"
          toggleIcon="eye-slash"
        >
          {(state, actions) => {
            return (
              <React.Fragment>
                <Input
                  type={state.type}
                  {...field}
                  {...props}
                  className={errorClass}
                />
                <FontAwesomeIcon
                  onClick={actions.handleToggleInput}
                  icon={state.icon}
                />
              </React.Fragment>
            );
          }}
        </ToggleInputType>
      </div>
      {errorClass && (
        <ErrorMessage name={field.name} component={InputFeedback} />
      )}
    </React.Fragment>
  );
};

ValidInputPassword.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,
  type: PropTypes.string
};

ValidInputPassword.defaultProps = {
  field: {},
  form: {},
  type: "password"
};

export default ValidInputPassword;
