import React from "react";

import { MdArrowRightAlt } from "react-icons/md";

import styles from "./styles.module.scss";
import "./custom-aos.scss";

export function Products() {
  return (
    <section className={styles.page_products}>
      <div className={styles.page_products__container}>
        <div className={`${styles.page_products__content} ${styles.content}`}>
          <div className={`${styles.content__item} ${styles.item}`} data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
            <div className={`${styles.item__box} ${styles.box}`}>
              <div className={ styles.slim }>
                <div className={styles.box__image} data-aos="products-custom-zoom" data-aos-delay="600" data-aos-duration="800">
                  <img className={ styles.slim_cat_img } src="./img/products/cat_slim.webp" alt="Cat Slim" />
                </div>
                <div className={styles.box__title_wrapper} data-aos="fade-left" data-aos-delay="600" data-aos-duration="800">
                  <h1 className={styles.box__title}>похудение</h1>
                </div>
              </div>
              <p className={styles.box__description} data-aos="products-custom-transform" data-aos-delay="900" data-aos-duration="800">
                Ваш кот весит больше собаки и почти утратил способность лазить
                по деревьям? Пора на диету! Cat Energy Slim поможет вашему
                питомцу сбросить лишний вес.
              </p>
              <hr />
              <button className={styles.box__button} data-aos="button-custom-transform" data-aos-delay="1000" data-aos-duration="800">
                <span>каталог slim</span>
                <MdArrowRightAlt />
              </button>
            </div>
          </div>
          <div className={`${styles.content__item} ${styles.item}`} data-aos="fade-left" data-aos-delay="200" data-aos-duration="800">
            <div className={`${styles.item__box} ${styles.box}`}>
              <div className={ styles.pro }>
                <div className={styles.box__image} data-aos="products-custom-zoom" data-aos-delay="600" data-aos-duration="800">
                  <img className={ styles.pro_cat_img } src="./img/products/cat_pro.webp" alt="Cat Pro" />
                </div>
                <div className={styles.box__title_wrapper} data-aos="fade-left" data-aos-delay="600" data-aos-duration="800">
                  <h1 className={styles.box__title}>набор массы</h1>
                </div>
              </div>
              <p className={styles.box__description} data-aos="products-custom-transform" data-aos-delay="900" data-aos-duration="800">
                Заработать авторитет среди дворовых котов и даже собак? Серия
                Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!
              </p>
              <hr />
              <button className={styles.box__button} data-aos="button-custom-transform" data-aos-delay="1000" data-aos-duration="800">
                <span>каталог pro</span>
                <MdArrowRightAlt />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
