import { css } from "@emotion/core";
import colors from "../../../styles/colors";

const navRight = css``;

const navRigthListItem = css`
  display: inline-flex;
  align-items: center;
  &:not(:last-of-type) {
    margin-right: 26px;
  }
  &:last-of-type {
    margin-left: 4px;
  }
  svg {
    font-size: 1.25rem;
  }
`;

const navRightIcon = css`
  color: ${colors.santasGray};
  &:hover {
    color: inherit;
  }
`;

const settingsDropdown = css`
  width: 354px;
  border: 1px solid ${colors.athensGray};
  box-shadow: 0 1px 8px 0 ${colors.mirage}26;
  padding: 6px 30px 19px 28px;
  &.show {
    display: flex;
    flex-wrap: wrap;
    left: -223px !important;
  }
  .circle {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background-color: ${colors.santasGray};
  }
`;

const settingsDropdownItem = css`
  width: 98px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.875rem;
  color: ${colors.mineShaft};
  padding: 15px 5px 11px;
  transition: color 0.2s ease;
  margin: 20px 0;
  &.selected {
    background: ${colors.dodgerBlue}20;
    box-shadow: 0 1px 8px 0 ${colors.mirage}26;
  }
  &:hover {
    color: ${colors.dodgerBlue};
    text-decoration: none;
  }
`;

const settingsDropdownItemText = css`
  font-size: 0.875rem;
  text-align: center;
  line-height: 1.125rem;
  margin-top: 10px;
  .selected & {
    color: ${colors.dodgerBlue};
  }
`;

const userAvatar = css`
  margin-right: 10px;
`;

const userName = css`
  font-size: 1rem;
  color: ${colors.midGray};
  margin-right: 6px;
`;

const chevronDown = css`
  display: inline-flex;
  margin-top: 5px;
  svg {
    width: 10px !important;
    height: 10px;
  }
`;

export default {
  navRight,
  navRigthListItem,
  navRightIcon,
  settingsDropdown,
  settingsDropdownItem,
  settingsDropdownItemText,
  userAvatar,
  userName,
  chevronDown
};
