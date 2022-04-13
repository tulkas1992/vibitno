/** @jsx jsx */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";
import { jsx } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import routes from "../../../config/routes";
import Avatar from "react-avatar";
import headerStyles from "../Header.styles";
import styles from "./Right.styles";

const Right = () => {
  return (
    <nav css={[styles.navRight, styles.nav]}>
      <ul className="list-unstyled" css={headerStyles.navList}>
        <li css={styles.navRigthListItem}>
          <Link css={styles.navRightIcon} to={routes.dashboard}>
            <i>
              <FontAwesomeIcon icon="envelope" />
            </i>
          </Link>
        </li>
        <li css={styles.navRigthListItem}>
          <UncontrolledButtonDropdown>
            <DropdownToggle>
              <i>
                <FontAwesomeIcon icon="cog" />
              </i>
            </DropdownToggle>
            <DropdownMenu css={styles.settingsDropdown}>
              <NavLink
                exact
                to="/"
                css={styles.settingsDropdownItem}
                activeClassName="selected"
              >
                <div className="circle" />
                <span css={styles.settingsDropdownItemText}>Integration</span>
              </NavLink>
              <NavLink
                exact
                to="/"
                css={styles.settingsDropdownItem}
                activeClassName="selected"
              >
                <div className="circle" />
                <span css={styles.settingsDropdownItemText}>
                  Company Settings
                </span>
              </NavLink>
              <NavLink
                css={styles.settingsDropdownItem}
                to={routes.settings.products}
                activeClassName="selected"
              >
                <div className="circle" />
                <span css={styles.settingsDropdownItemText}>Products</span>
              </NavLink>
              <NavLink
                exact
                to="/"
                css={styles.settingsDropdownItem}
                activeClassName="selected"
              >
                <div className="circle" />
                <span css={styles.settingsDropdownItemText}>
                  User Management
                </span>
              </NavLink>
              <NavLink
                exact
                to="/"
                css={styles.settingsDropdownItem}
                activeClassName="selected"
              >
                <div className="circle" />
                <span css={styles.settingsDropdownItemText}>
                  Templates & Scripts
                </span>
              </NavLink>
              <NavLink
                exact
                to="/"
                css={styles.settingsDropdownItem}
                activeClassName="selected"
              >
                <div className="circle" />
                <span css={styles.settingsDropdownItemText}>
                  Humanized Managemer
                </span>
              </NavLink>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </li>
        <li css={styles.navRigthListItem}>
          <Link css={styles.navRightIcon} to={routes.dashboard}>
            <i>
              <FontAwesomeIcon icon="bell" />
            </i>
          </Link>
        </li>
        <li css={styles.navRigthListItem}>
          <Avatar
            css={styles.userAvatar}
            size="36"
            round={true}
            name="Ricardo Ordoñez"
          />
          <span css={styles.userName}>Ricardo</span>
          <i css={[styles.navRightIcon, styles.chevronDown]}>
            <FontAwesomeIcon icon="chevron-down" />
          </i>
        </li>
      </ul>
    </nav>
  );
};

export default Right;
