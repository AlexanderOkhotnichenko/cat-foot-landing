import React from 'react';

import styles from './styles.module.scss';
import './aos.scss';

export function Stages() {
  return (
    <section className={ styles.page_stages }>
      <div className={ styles.page_stages__container }>
        <div className={`${styles.page_stages__content} ${styles.content}`}>
          <h1 className={ styles.content__title } data-aos="zoom-out" data-aos-delay="200" data-aos-duration="800">Как это работает</h1>
          <div className={ styles.content__items }>
            <div className={`${styles.content__item} ${styles.item}`} data-aos="zoom-out" data-aos-delay="200" data-aos-duration="800">
            <div className={styles.item__number}>1</div>
              <div className={ styles.item__icon }>
                <svg data-aos-id="castom-aos-svg">
                  <use xlinkHref="./sprites.svg#leaf"></use>
                </svg>
              </div>
              <p className={ styles.item__description } data-aos="fade-up" data-aos-delay="450" data-aos-duration="850">
                Функциональное питание
                содержит только полезные
                питательные вещества.
              </p>
            </div>
            <div className={`${styles.content__item} ${styles.item}`} data-aos="zoom-out" data-aos-delay="400" data-aos-duration="800">
              <div className={styles.item__number}>2</div>
              <div className={ styles.item__icon }>
                <svg>
                  <use xlinkHref="./sprites.svg#tub"></use>
                </svg>
              </div>
              <p className={ styles.item__description } data-aos="fade-up" data-aos-delay="600" data-aos-duration="850">
                Выпускается в виде порошка, 
                который нужно лишь залить 
                кипятком и готово.
              </p>
            </div>
            <div className={`${styles.content__item} ${styles.item}`} data-aos="zoom-out" data-aos-delay="650" data-aos-duration="800">
            <div className={styles.item__number}>3</div>
              <div className={ styles.item__icon }>
                <svg>
                  <use xlinkHref="./sprites.svg#eat"></use>
                </svg>
              </div>
              <p className={ styles.item__description } data-aos="fade-up" data-aos-delay="750" data-aos-duration="850">
                Замените один-два приема 
                обычной еды на наше 
                функциональное питание.
              </p>
            </div>
            <div className={`${styles.content__item} ${styles.item}`} data-aos="zoom-out" data-aos-delay="800" data-aos-duration="800">
            <div className={styles.item__number}>4</div>
              <div className={ styles.item__icon }>
                <svg>
                  <use xlinkHref="./sprites.svg#alarm"></use>
                </svg>
              </div>
              <p className={ styles.item__description } data-aos="fade-up" data-aos-delay="900" data-aos-duration="850">
                Уже через месяц наслаждайтесь 
                изменениями к лучшему 
                вашего питомца!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
