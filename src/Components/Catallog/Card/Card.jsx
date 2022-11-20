import React from "react";
import ContentLoader from "react-content-loader";

import styles from "./styles.module.scss";

export function Card({ img, title, info, button, loading = true }) {
  return (
      loading ? <ContentLoader
      speed={2}
      width={245}
      height={420}
      viewBox="0 0 245 420"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="224" rx="10" ry="10" width="245" height="45" />
      <rect x="0" y="0" rx="10" ry="10" width="245" height="196" />
      <rect x="0" y="290" rx="10" ry="10" width="245" height="15" />
      <rect x="0" y="320" rx="10" ry="10" width="245" height="15" />
      <rect x="0" y="350" rx="10" ry="10" width="245" height="15" />
      <rect x="0" y="380" rx="10" ry="10" width="245" height="40" />
    </ContentLoader> : <div className={`${styles.content__item} ${styles.item}`} data-aos="custom-aos-3" data-aos-delay="200" data-aos-easing="linear" data-aos-duration="900">
    <img src={img.src} alt={img.alt} className={styles.item__image} data-aos="custom-aos" data-aos-duration="600" data-aos-delay="1200"/>
    <div className={styles.item__content}>
      <h4 className={styles.item__title} data-aos="fade-up" data-aos-duration="600" data-aos-delay="1300">
        {title}
      </h4>
      <div data-aos="custom-aos-2" data-aos-duration="800" data-aos-delay="1550" data-aos-offset="0">
        <div className={styles.item__info}>
          <div className={styles.item__name}>{info.line_1.title}</div>
          <span className={styles.item__line}></span>
          <div className={styles.item__weight}>
            {info.line_1.description}
            <span>г</span>
          </div>
        </div>
        <div className={styles.item__info}>
          <div className={styles.item__name}>{info.line_2.title}</div>
          <span className={styles.item__line}></span>
          <div className={styles.item__weight}>{info.line_2.description}</div>
        </div>
        <div className={styles.item__info}>
          <div className={styles.item__name}>{info.line_3.title}</div>
          <span className={styles.item__line}></span>
          <div className={styles.item__weight}>
            {info.line_3.description}
            <span>Р.</span>
          </div>
        </div>
      </div>
      <button className={styles.item__green_button} data-aos="zoom-in" data-aos-duration="600" data-aos-delay="1900" data-aos-offset="0">
        {button}
      </button>
    </div>
  </div>
    
  );
}
