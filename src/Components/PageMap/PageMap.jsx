import React from "react";

import styles from "./styles.module.scss";

export function PageMap() {
  return (
    <section id="map" className={styles.page_map}>
      <div className={styles.page_map__container}>
        <div
          className={`${styles.page_map__content} ${styles.content}`}
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          <h4 className={styles.content__title}>
            приглашаем к сотрудничеству дилеров!
          </h4>
          <div className={`${styles.content__row} ${styles.row}`}>
            <h5 className={styles.row__address}>
              ул. Большая Конюшенная, д. 19/8
            </h5>
            <h5 className={styles.row__city}>Санкт-Петербург</h5>
          </div>
        </div>
      </div>
      <iframe
        width="100%"
        height="400"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=%D1%83%D0%BB.%20%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F%20%20%D0%9A%D0%BE%D0%BD%D1%8E%D1%88%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F,%20%D0%B4.%2019/8&t=&z=17&ie=UTF8&iwloc=&output=embed"
        scrolling="no"
      ></iframe>
    </section>
  );
}
