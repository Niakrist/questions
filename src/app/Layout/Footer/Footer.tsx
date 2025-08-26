import React from "react";
import styles from "./Footer.module.css";
import { Container, Icon, Text } from "@/shared/ui";
import { Link } from "react-router-dom";

const Footer = (): React.JSX.Element => {
  const currentData = new Date();
  return (
    <footer className={styles.footer}>
      <section className={styles.section}>
        <Container>
          <Icon className={styles.iconLogoText} name="iconLogoText" />
          <Text
            className={styles.text}
            color="white"
            textSize="normal"
            fontWeght="fw400">
            Выбери, каким будет IT завтра, вместе с нами
          </Text>
          <ul className={styles.iconsGroup}>
            <li>
              <Link to="#">
                <Icon name="iconYoutube" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <Icon name="iconGutHub" />
              </Link>
            </li>

            <li>
              <Link to="#">
                <Icon name="iconInstagram" />
              </Link>
            </li>

            <li>
              <Link to="#">
                <Icon name="iconTelegram" />
              </Link>
            </li>
          </ul>
          <Text
            className={styles.opensource}
            color="grey"
            fontWeght="fw400"
            textSize="small">
            YeaHub — это полностью открытый проект, призванный объединить
            и улучшить IT-сферу. Наш исходный код доступен для просмотра
            на GitHub. Дизайн проекта также открыт для ознакомления в Figma.
          </Text>

          <div className={styles.copy}>
            <p>&copy; {currentData.getFullYear()}</p>

            <div className={styles.rightBlock}>
              <a className={styles.copyLink} href="#">
                Документы
              </a>
              <ul className={styles.iconsGroup}>
                <li>
                  <Link to="#">
                    <Icon name="iconGutHub" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <Icon name="iconFigma" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
