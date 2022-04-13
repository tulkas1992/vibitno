import { css } from "@emotion/core";
import font from "../app/styles/font";

export const form = css`
  width: 100%;
  max-width: 370px;
`;

export const card = css`
  padding: 35px 40px;
  margin-top: 19px;
  h2 {
    text-align: center;
    margin-bottom: 16px;
  }
  .form-group {
    margin-bottom: 21px;
  }
`;

export const instructionText = css`
  margin-bottom: 20px;
`;

export const backToLogin = css`
  font-weight: ${font.medium};
  margin-top: 15px;
`;
