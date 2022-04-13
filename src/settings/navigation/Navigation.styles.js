import { css } from "@emotion/core";
import colors from "../../app/styles/colors";
import font from "../../app/styles/font";

const article = css`
  width: 100%;
  max-width: 270px;
  height: calc(100vh - 70px);
  overflow-y: auto;
  background-color: ${colors.white};
  padding: 50px 20px 50px 30px;
  box-shadow: 0 1px 6px 0 ${colors.mirage}26;
  margin-top: 1px;
`;

const h3 = css`
  margin-bottom: 40px;
`;

const navItem = css`
  font-size: 0.875rem;
  margin-bottom: 10px;
`;

const navLink = css`
  display: inline-flex;
  align-items: center;
  width: 100%;
  color: ${colors.midGray};
  transition: color 0.2s ease;
  &:hover {
    color: ${colors.azureRadiance};
    text-decoration: none;
  }
  &.selected {
    color: ${colors.azureRadiance};
    font-weight: ${font.bold};
  }
`;

const navItemIcon = css`
  font-size: 20px;
  margin-right: 20px;
`;

export default {
  article,
  h3,
  navItem,
  navLink,
  navItemIcon
};
