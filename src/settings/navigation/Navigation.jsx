/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { NavLink } from "react-router-dom";
import routes from "../../app/config/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import H3 from "../../app/common/text/H3";
import styles from "./Navigation.styles";

const Navigation = () => {
  return (
    <article css={styles.article}>
      <H3 css={styles.h3}>Settings</H3>
      <nav>
        <ul className="list-unstyled">
          <li css={styles.navItem}>
            <NavLink
              exact
              to="/"
              css={styles.navLink}
              activeClassName="selected"
            >
              <i css={styles.navItemIcon}>
                <FontAwesomeIcon icon="circle-notch" />
              </i>
              <span>Integrations</span>
            </NavLink>
          </li>
          <li css={styles.navItem}>
            <NavLink
              exact
              to="/"
              css={styles.navLink}
              activeClassName="selected"
            >
              <i css={styles.navItemIcon}>
                <FontAwesomeIcon icon="circle-notch" />
              </i>
              <span>Company Settings</span>
            </NavLink>
          </li>
          <li css={styles.navItem}>
            <NavLink
              exact
              to={routes.settings.products}
              css={styles.navLink}
              activeClassName="selected"
            >
              <i css={styles.navItemIcon}>
                <FontAwesomeIcon icon="circle-notch" />
              </i>
              <span>Products</span>
            </NavLink>
          </li>
          <li css={styles.navItem}>
            <NavLink
              exact
              to="/"
              css={styles.navLink}
              activeClassName="selected"
            >
              <i css={styles.navItemIcon}>
                <FontAwesomeIcon icon="circle-notch" />
              </i>
              <span>User Management</span>
            </NavLink>
          </li>
          <li css={styles.navItem}>
            <NavLink
              exact
              to="/"
              css={styles.navLink}
              activeClassName="selected"
            >
              <i css={styles.navItemIcon}>
                <FontAwesomeIcon icon="circle-notch" />
              </i>
              <span>Templates & Scripts</span>
            </NavLink>
          </li>
          <li css={styles.navItem}>
            <NavLink
              exact
              to="/"
              css={styles.navLink}
              activeClassName="selected"
            >
              <i css={styles.navItemIcon}>
                <FontAwesomeIcon icon="circle-notch" />
              </i>
              <span>Humanized Manager</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </article>
  );
};

export default Navigation;
