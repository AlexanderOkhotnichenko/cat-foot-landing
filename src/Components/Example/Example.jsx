import React from 'react';

import styles from "./styles.module.scss";
import './custom-aos.scss';

export function Example() {
  const [isChecked, setIsChecked] = React.useState(false);
  const smallCat = React.useRef();
  const bigCat = React.useRef();

  React.useEffect(() => {
    if (isChecked) {
      smallCat.current.style.opacity = "1";
      bigCat.current.style.opacity = "0";
    } else {
      smallCat.current.style.opacity = "0";
      bigCat.current.style.opacity = "1";
    }
  });

  const handleClick = () => {
    setIsChecked(!isChecked);
  }

  return (
    <section className={ styles.page_example }>
      <div className={ styles.page_example__background } data-aos="custom" data-aos-easing="linear" data-aos-delay="200" data-aos-duration="1200" data-aos-offset="400"></div>
      <div className={ styles.page_example__container }>
        <div className={`${styles.page_example__content} ${styles.content}`}>
          <div className={`${styles.content__box} ${styles.box}`}>
            <div className={ styles.box__title_wrapper }>
              <h1 className={ styles.box__title } data-aos="zoom-out" data-aos-delay="1400" data-aos-duration="800">Живой пример</h1>
            </div>
            <div className={ styles.box__wrapper }>
              <p className={ styles.box__description } data-aos="zoom-out" data-aos-offset="100" data-aos-delay="1450" data-aos-duration="800">
                Борис сбросил 5 кг за 2 месяца, просто заменив свой 
                обычный корм на Cat Energy Slim. Отличный результат 
                без изнуряющих тренировок! При этом он не менял своих 
                привычек и по-прежнему спит по 16 часов в день.
              </p>
              <div className={ styles.box__row }>
                <div className={ styles.box__wrapper_info }>
                  <div className={ styles.box__info } data-aos="zoom-in" data-aos-delay="1550" data-aos-duration="800">
                    5 КГ
                    <span>снижение веса</span>
                  </div>
                  <div className={ styles.box__info } data-aos="zoom-in" data-aos-delay="1550" data-aos-duration="800">
                    60 ДНЕЙ
                    <span>затрачено времени</span>
                  </div>
                </div>
                <div className={`${styles.box__wrapper_price} ${styles.price}`}>
                  <h4 className={ styles.price__title } data-aos="fade-up" data-aos-delay="1550" data-aos-duration="1000">Затраты на питание: </h4>
                  <span className={ styles.price__price } data-aos="fade-up" data-aos-delay="1700" data-aos-duration="1000">15 000 РУБ.</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.content__split} ${styles.split}`}>
            <div className={styles.split__image} data-aos="fade-up" data-aos-delay="1550" data-aos-duration="800" data-aos-offset="400">
              <img ref={bigCat} src="https://alexanderokhotnichenko.github.io/cat-foot-landing/img/example/before_cat.webp" alt="Big Cat"/>
              <img ref={smallCat} src="https://alexanderokhotnichenko.github.io/cat-foot-landing/img/example/small_cat.webp" alt="Small Cat"/>
            </div>
            <div className={ styles.split__range } data-aos="fade-left" data-aos-delay="1750" data-aos-duration="800">
              <span>было</span>
              <div className={`${styles.checkbox } ${isChecked ? styles.check : ''}`}>
                <label htmlFor="checkbox"></label>
                <input id='checkbox' type={'checkbox'} onChange={ handleClick } />
              </div>
              <span>стало</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}