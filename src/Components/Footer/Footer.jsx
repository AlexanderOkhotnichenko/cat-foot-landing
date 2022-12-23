import React from 'react';

import { Link } from 'react-router-dom';

import styles from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={ styles.page_footer }>
      <div className={ styles.page_footer__container }>
        <div className={`${styles.footer__content} ${styles.content}`}>
          <div className={`${styles.content__logo} ${styles.logo}`} data-aos="fade-right" data-aos-offset="0" data-aos-delay="200" data-aos-duration="800">
            <Link to='/' className={ styles.logo__link }>
              <svg>
                <use xlinkHref="https://alexanderokhotnichenko.github.io/cat-foot-landing/sprites.svg#logo-mobile-text"></use>
              </svg>
            </Link>
          </div>
          <nav className={`${styles.content__menu} ${styles.menu}`}>
              <ul className={ styles.menu__list } data-aos="fade-right" data-aos-offset="0" data-aos-delay="300" data-aos-duration="800">
                <li className={ styles.menu__item }>
                  <Link to='/' className={ styles.menu__link }>
                    <svg>
                      <use xlinkHref="https://alexanderokhotnichenko.github.io/cat-foot-landing/sprites.svg#vk"></use>
                    </svg>
                  </Link>
                </li>
                <li className={ styles.menu__item } data-aos="fade-right" data-aos-offset="0" data-aos-delay="400" data-aos-duration="800">
                  <Link to='/' className={ styles.menu__link }>
                    <svg>
                      <use xlinkHref="https://alexanderokhotnichenko.github.io/cat-foot-landing/sprites.svg#instagram"></use>
                    </svg>
                  </Link>
                </li>
                <li className={ styles.menu__item } data-aos="fade-right" data-aos-offset="0" data-aos-delay="500" data-aos-duration="800">
                  <Link to='/' className={ styles.menu__link }>
                    <svg>
                      <use xlinkHref="https://alexanderokhotnichenko.github.io/cat-foot-landing/sprites.svg#facebook"></use>
                    </svg>
                  </Link>
                </li>
              </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
