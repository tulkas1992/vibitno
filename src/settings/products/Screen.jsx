/** @jsx jsx */
import React from "react";
import ProductsTable from "./Table";
import H1 from "../../app/common/text/H1";
import { jsx } from "@emotion/core";
import styles from "./Screen.styles";

const Screen = () => {
  return (
    <React.Fragment>
      <H1 css={styles.h1}>Products</H1>
      <ProductsTable />
    </React.Fragment>
  );
};

export default Screen;
