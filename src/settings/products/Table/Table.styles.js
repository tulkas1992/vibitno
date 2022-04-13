import { css } from "@emotion/core";
import colors from "../../../app/styles/colors";

const productsSelectedSection = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.athensGray};
  padding: 13px 0 13px 23px;
`;

export default {
  productsSelectedSection
};
