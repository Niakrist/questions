import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

import styles from "./Layout.module.css";
import { Container } from "@/shared/ui";

const Layout = (): React.JSX.Element => {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <Container className={styles.container}>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
