import { css } from "@emotion/core";
import pattern from "../app/assets/pattern.png";

export const wrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-image: url(${pattern});
  background-size: cover;
  .alert {
    position: absolute;
    top: 36px;
  }
`;
