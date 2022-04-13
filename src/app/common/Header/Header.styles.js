import { css } from "@emotion/core";
import colors from "../../styles/colors";

const header = css`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.white};
  box-shadow: 0 1px 0 0 ${colors.athensGray};
  padding: 17px 30px;
`;

const nav = css`
  display: inline-flex;
  align-items: center;
`;

const navList = css`
  display: inline-flex;
  margin-bottom: 0;
`;

const navListItem = css`
  &:not(:last-of-type) {
    margin-right: 30px;
  }
`;

export default {
  header,
  nav,
  navList,
  navListItem
};
