/** @jsx jsx */
import React from "react";
import { Link } from "react-router-dom";
import { jsx } from "@emotion/core";
import routes from "../../../config/routes";
import logo from "../../../assets/logo.svg";
import headerStyles from "../Header.styles";
import styles from "./Left.styles";

const Left = () => {
  return (
    <div css={styles.navHolder}>
      <Link to={routes.dashboard}>
        <img css={styles.logo} src={logo} alt="Logo" />
      </Link>
      <nav css={[styles.navLeft, headerStyles.nav]}>
        <ul className="list-unstyled" css={headerStyles.navList}>
          <li css={[styles.navLeftListItem, headerStyles.navListItem]}>
            <Link css={styles.navLeftLink} to={routes.dashboard}>
              Workflows
            </Link>
          </li>
          <li css={[styles.navLeftListItem, headerStyles.navListItem]}>
            <Link css={styles.navLeftLink} to={routes.dashboard}>
              Schedule
            </Link>
          </li>
          <li css={[styles.navLeftListItem, headerStyles.navListItem]}>
            <Link css={styles.navLeftLink} to={routes.dashboard}>
              Reports
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Left;
