import React from "react";
import styles from "./Header.module.css";
import { Button, Container, Icon } from "@/shared/ui";
import { Link } from "react-router-dom";

const Header = (): React.JSX.Element => {
  return (
    <section className={styles.section}>
      <Container className={styles.header}>
        <nav>
          <ul className={styles.list}>
            <Link className={styles.logo} to="/questions">
              <Icon name="iconLogo" />
              <Icon className={styles.iconLogoText} name="iconLogoText" />
            </Link>
            <li>
              <Link className={styles.link} to="/questions">
                База вопросов
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="#">
                Тренажер
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.account}>
          <Button
            bgColor="transparent"
            color="purple"
            fontWeght="fw600"
            textSize="normal">
            Вход
          </Button>
          <Button
            className={styles.registration}
            bgColor="purple"
            color="white"
            fontWeght="fw500"
            textSize="big"
            borderRadius="br12">
            Регистрация
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Header;
