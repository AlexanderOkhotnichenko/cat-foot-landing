import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./styles.module.scss";
import './custom-aos.scss';

export function Home() {
  return (
    <section className={styles.page_home}>
      <div className={ styles.page_home__background } data-aos="fade-left" data-aos-delay="100" data-aos-duration="700"></div>
      <div className={ styles.page_home__container }>
        <div className={`${styles.page_home__content} ${styles.content}`}>
          <div className={`${ styles.content__box } ${ styles.box }`}>
            <h1 className={ styles.box__title } data-aos="fade-right" data-aos-delay="700" data-aos-duration="800">Функциональное питание для котов</h1>
            <h3 className={ styles.box__title } data-aos="fade-right" data-aos-delay="800" data-aos-duration="800">Занялся собой? Займись котом!</h3>
            <Link to="/form" className={ styles.box__button } data-aos="fade-up" data-aos-delay="900" data-aos-duration="600">подобрать программу</Link>
          </div>
          <div className={`${ styles.content__image } ${ styles.image }`} data-aos="custom-zoom" data-aos-delay="400" data-aos-duration="700">
            <img src="./img/home/cat-energy.png" alt="Cat energy" />
          </div>
          <Link to="/form" className={`${styles.box__button} ${styles.button_mobile}`}>подобрать программу</Link>
        </div>
      </div>
    </section>
  )
}