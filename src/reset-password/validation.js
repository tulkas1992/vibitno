import * as Yup from "yup";

export const initialValues = {
  password: "",
  confirmPassword: ""
};

export const validationSchema = Yup.object().shape({
  password: Yup.string()
    .test(
      "password-quality",
      "Must contain lower and upper case, symbols and numbers",
      password =>
        [
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\/\(\)\=\'\-\_\.\,\;\:\`\"\+\^\<\>\{\}\[\]\|\#\\])[A-Za-z\d@$!%*?&\/\(\)\=\'\-\_\.\,\;\:\`\"\+\^\<\>\{\}\[\]\|\#\\]{8,}$/
        ].reduce((m, p) => m && p.test(password), true)
    )
    .min(8, "Password must be at least 8 chars")
    .required("Password is a required field"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password is a required field")
});
