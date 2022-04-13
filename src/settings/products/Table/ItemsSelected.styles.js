import { css } from "@emotion/core";
import font from "../../../app/styles/font";
import colors from "../../../app/styles/colors";

const wrapper = css`
  display: inline-flex;
  color: ${colors.azureRadiance};
  font-weight: ${font.medium};
  font-size: 0.75rem;
  text-transform: uppercase;
  line-height: 18px;
  letter-spacing: 1px;
`;

const count = css`
  padding-right: 5px;
  padding-left: 21px;
`;

const actionsWrapper = css`
  display: inline-flex;
  align-items: center;
  border-left: 1px solid ${colors.mirage}1a;
  padding-left: 21px;
  margin-left: 21px;
`;

const button = css`
  font-size: 16px;
  color: ${colors.azureRadiance};
  cursor: pointer;
  border: 0;
  padding: 0;
  transition: color 0.2s ease;
  &:not(:last-of-type) {
    margin-right: 21px;
  }
  &:disabled {
    color: ${colors.mirage}1a;
    cursor: not-allowed;
  }
`;

export default {
  wrapper,
  count,
  actionsWrapper,
  button
};
