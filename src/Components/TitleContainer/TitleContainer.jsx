import React from "react";

import styles from "./styles.module.scss";

export function TitleContainer({ title }) {
  return (
    <div className={styles.container_title} data-aos="zoom-out" data-aos-delay="200" data-aos-duration="800">
      <div className={styles.container_title__line}></div>
      <h1 className={styles.container_title__title}>{ title }</h1>
    </div>
  );
}
