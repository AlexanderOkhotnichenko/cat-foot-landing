import React from "react";

import styles from "./styles.module.scss";

export function AddCard() {
  return (
    <div className={styles.add_card} data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
      <svg>
        <use xlinkHref="./sprites.svg#plus"></use>
      </svg>
      <div className={styles.add_card__content}>
        <h4 className={styles.add_card__title}>Показать еще 100500 товаров</h4>
        <p className={ styles.add_card__text }>На самом деле вкусов гораздо больше!</p>
      </div>
      <button className={styles.add_card__green_button}><span>показать все</span></button>
    </div>
  );
}
