import { css } from "@emotion/core";
import colors from "../../styles/colors";
import font from "../../styles/font";

const paginationWrapper = css`
  display: inline-flex;
  font-size: 0.75rem;
  font-weight: ${font.medium};
  color: ${colors.santasGray};
  line-height: 20px;
`;

const paginationCount = css``;

const paginationArrows = css`
  margin-left: 21px;
  .arrow-left {
    margin-right: 21px;
  }
`;

const button = css`
  color: ${colors.dodgerBlue};
  padding: 0;
  transition: opacity 0.2s ease;
  &:disabled {
    opacity: 0.5;
  }
`;

export default {
  paginationWrapper,
  paginationCount,
  paginationArrows,
  button
};
