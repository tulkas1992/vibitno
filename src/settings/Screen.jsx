/** @jsx jsx */
import React from "react";
import { Route } from "react-router-dom";
import { jsx } from "@emotion/core";
import routes from "../app/config/routes";
import Header from "../app/common/Header";
import Navigation from "./navigation";
import ProductsScreen from "../settings/products/Screen";
import styles from "./Screen.styles";

const Screen = () => {
  return (
    <div>
      <Header />
      <div css={styles.wrapper}>
        <Navigation />
        <section css={styles.content}>
          <Route
            exact
            path={routes.settings.products}
            component={ProductsScreen}
          />
        </section>
      </div>
    </div>
  );
};

export default Screen;
