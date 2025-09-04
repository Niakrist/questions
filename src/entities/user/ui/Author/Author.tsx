import React from "react";
import { Link } from "react-router-dom";
import type { IAuthorProps } from "./Author.props";
import styles from "./Author.module.css";

const Author = ({ authorName }: IAuthorProps): React.JSX.Element => {
  return (
    <p className={styles.author}>
      Автор:{" "}
      <Link to="#" className={styles.accent}>
        {authorName}
      </Link>
    </p>
  );
};

export default Author;
