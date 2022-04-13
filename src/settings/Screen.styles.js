import { css } from "@emotion/core";

const wrapper = css`
  display: flex;
`;

const content = css`
  width: 100%;
  height: calc(100vh - 70px);
  overflow-y: auto;
  padding: 52px 60px;
`;

export default {
  wrapper,
  content
};
