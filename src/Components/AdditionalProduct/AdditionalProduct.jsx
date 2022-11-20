import React from "react";

import { TitleContainer } from "../TitleContainer";

import styles from "./styles.module.scss";

export function AdditionalProduct() {
  return (
    <section className={styles.page_additionalproduct}>
      <div className={styles.page_additionalproduct__container}>
        <div className={`${styles.page_additionalproduct__content} ${styles.content}`}>
          <TitleContainer title="Дополнительные товары" />
          <div className={ styles.content__row }>
            <ul className={ styles.content__list }>
              <li className={`${styles.content__item} ${styles.item}`} data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                <div className={ styles.item__wrapper }>
                  <div className={ styles.item__name }>
                    <h5>Сахарозаменитель</h5>
                  </div>
                  <div className={ styles.item__description }>
                    <span>1 упаковка (100 г)</span>
                    <span>200 Р</span>
                  </div>
                </div>
                <button className={ styles.item__green_button }><span>заказать</span></button>
              </li>
              <li className={`${styles.content__item} ${styles.item}`} data-aos="fade-up" data-aos-delay="350" data-aos-duration="800">
                <div className={ styles.item__wrapper }>
                  <div className={ styles.item__name }>
                    <h5>Питьевая вода</h5>
                  </div>
                  <div className={ styles.item__description }>
                    <span>5 литров</span>
                    <span>50 Р</span>
                  </div>
                </div>
                <button className={ styles.item__green_button }><span>заказать</span></button>
              </li>
              <li className={`${styles.content__item} ${styles.item}`} data-aos="fade-up" data-aos-delay="450" data-aos-duration="800">
                <div className={ styles.item__wrapper }>
                  <div className={ styles.item__name }>
                    <h5>молоко</h5>
                  </div>
                  <div className={ styles.item__description }>
                    <span>1 литр</span>
                    <span>100 Р</span>
                  </div>
                </div>
                <button className={ styles.item__green_button }><span>заказать</span></button>
              </li>
              <li className={`${styles.content__item} ${styles.item}`} data-aos="fade-up" data-aos-delay="550" data-aos-duration="800">
                <div className={ styles.item__wrapper }>
                  <div className={ styles.item__name }>
                    <h5>витамины</h5>
                  </div>
                  <div className={ styles.item__description }>
                    <span>1 упаковка (30 г)</span>
                    <span>300 Р</span>
                  </div>
                </div>
                <button className={ styles.item__green_button }><span>заказать</span></button>
              </li>
            </ul>
            <div className={`${styles.content__gift} ${styles.gift}`} data-aos="zoom-in" data-aos-delay="500" data-aos-duration="600">
              <div className={ styles.gift__content }>
                <div className={ styles.gift__icon }>
                  <svg>
                    <use xlinkHref="./sprites.svg#gift"></use>
                  </svg>
                </div>
                <p className={ styles.gift__description }>Закажите все и получите чехол для кота в подарок!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
