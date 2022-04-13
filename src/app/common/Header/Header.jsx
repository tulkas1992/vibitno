/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import NavigationLeft from "./Navigation/Left";
import NavigationRight from "./Navigation/Right";
import styles from "./Header.styles";

const Header = () => {
  return (
    <header css={styles.header}>
      <NavigationLeft />
      <NavigationRight />
    </header>
  );
};

export default Header;
