import { css } from "@emotion/core";

const card = css`
  padding: 35px 40px;
  margin-top: 19px;
  h2 {
    margin-bottom: 16px;
  }
  .form-group {
    &:last-of-type {
      margin-bottom: 6px;
    }
  }
  button {
    margin-top: 30px;
  }

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0px 26px;

  .full,
  h2,
  p,
  small {
    grid-column: 1 / 3;
  }
`;

const form = css`
  max-width: 605px;
`;

const signupText = css`
  margin-bottom: 30px;
`;

const loginLink = css`
  margin-top: 30px;
  line-height: 37px;
  font-size: 14px;
`;

const termsAndPrivacy = css`
  text-align: center;
  display: block;
  line-height: 2rem;
`;

export default {
  card,
  form,
  signupText,
  loginLink,
  termsAndPrivacy
};
