import { css } from "@emotion/core";
import font from "../../styles/font";

export const wrapper = css`
  display: flex;
  align-items: center;
`;

export const icon = css`
  display: inline-flex;
  font-size: 22px;
  margin-right: 18px;
`;

export const message = css`
  font-size: 0.875rem;
  font-weight: ${font.medium};
  line-height: 22px;
`;
