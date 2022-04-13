import { css } from "@emotion/core";

export const form = css`
  width: 100%;
  max-width: 370px;
`;

export const card = css`
  padding: 35px 40px;
  margin-top: 19px;
  h2 {
    text-align: center;
    margin-bottom: 23px;
  }
  .form-group {
    &:last-of-type {
      margin-bottom: 6px;
    }
  }
  button {
    margin-top: 20px;
  }
`;

export const forgotPassword = css`
  text-align: right;
`;

export const noAccount = css`
  display: inline-block;
  text-align: center;
  margin-top: 10px;
`;
