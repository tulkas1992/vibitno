import * as Yup from "yup";

export default Yup.object().shape({
  forename: Yup.string()
    .trim()
    .min(1)
    .max(30)
    .required("We need to know your name"),
  surname: Yup.string()
    .trim()
    .min(1)
    .max(30)
    .required("We need your lastname"),
  email: Yup.string()
    .trim()
    .email("Double check that's right. Looks invalid.")
    .required("Required to create an account"),
  password: Yup.string()
    .min(8, "Password must be at least 8 chars")
    .test(
      "password-quality",
      "Must contain lower and upper case, symbols and numbers",
      password =>
        [
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\/\(\)\=\'\-\_\.\,\;\:\`\"\+\^\<\>\{\}\[\]\|\#\\])[A-Za-z\d@$!%*?&\/\(\)\=\'\-\_\.\,\;\:\`\"\+\^\<\>\{\}\[\]\|\#\\]{8,}$/
        ].reduce((m, p) => m && p.test(password), true)
    )
    .required("Required"),
  passwordConfirmation: Yup.string()
    .min(8, "Password must be at least 8 chars")
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required")
});
