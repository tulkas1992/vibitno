import { css } from "@emotion/core";
import colors from "../../../styles/colors";

const navHolder = css`
  display: inline-flex;
  align-items: center;
`;

const logo = css`
  width: 30px;
`;

const navLeft = css`
  height: 38px;
  border-left: 1px solid ${colors.athensGray};
  padding-left: 30px;
  margin-left: 30px;
`;

const navLeftListItem = css`
  font-size: 1rem;
`;

const navLeftLink = css`
  color: ${colors.midGray};
  line-height: 22px;
  &:hover {
    color: inherit;
    text-decoration: none;
  }
`;

export default {
  navHolder,
  logo,
  navLeft,
  navLeftListItem,
  navLeftLink
};
