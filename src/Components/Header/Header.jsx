import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./styles.module.scss";

export function Header() {
  const [isToggle, setIsToggle] = React.useState(false);
  const headerRef = React.useRef();
  const [scrollHeader, setScrollHeader] = React.useState(false);

  React.useEffect(() => {
    const isHeaderScrollWindow = () => {
      window.scrollY > 0 ? setScrollHeader(true) : setScrollHeader(false);
    }

    isHeaderScrollWindow();
    window.addEventListener("scroll", isHeaderScrollWindow);
  }, []);

  const handleClick = () => {
    setIsToggle(!isToggle);
  }

  const onCloseMenu = () => {
    setIsToggle(false);
  }

  return (
    <header ref={headerRef} className={`${styles.header} ${scrollHeader ? styles.fixed : ''}`} >
      <div className={ styles.header__container }>
        <div className={`${styles.header__content} ${styles.content}`}>
          <Link to="/" className={`${styles.content__logo} ${ styles.logo }`}>
            <div className={ styles.logo__desktop }>
              <svg>
                <use xlinkHref="./sprites.svg#logo-desktop"></use>
              </svg>
            </div>
            <div className={ styles.logo__tablet }>
              <svg>
                <use xlinkHref="./sprites.svg#logo-tablet"></use>
              </svg>
            </div>
            <div className={`${styles.logo__mobile} ${styles.mobile}`}>
              <div className={ styles.mobile__hero }>
                <svg>
                  <use xlinkHref="./sprites.svg#logo-mobile-hero"></use>
                </svg>
              </div>
              <div className={ styles.mobile__text }>
                <svg>
                  <use xlinkHref="./sprites.svg#logo-mobile-text"></use>
                </svg>
              </div>
            </div>
          </Link>
          <nav className={`${styles.content__menu} ${styles.menu} ${isToggle ? styles.open : ''}`}>
            <ul className={ styles.menu__list }>
              <li className={ styles.menu__item }><Link onClick={onCloseMenu} to="./react-cat-energy-landing">главная</Link></li>
              <li className={ styles.menu__item }><Link onClick={onCloseMenu} to="./react-cat-energy-landing/catallog">каталог продукции</Link></li>
              <li className={ styles.menu__item }><Link onClick={onCloseMenu} to="./react-cat-energy-landing/form">подбор программы</Link></li>
            </ul>
          </nav>
          <button className={`${styles.content__button} ${isToggle ? styles.active : ''}`} onClick={ handleClick }>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
