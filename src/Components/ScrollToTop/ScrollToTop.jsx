import React from 'react';

import { BsBoxArrowUp } from "react-icons/bs";

import styles from "./styles.module.scss";

export function ScrollToTop() {
  const [triggerScroll, setTriggerScroll] = React.useState(false);
  const offset = 100;
  const scrollUpRef = React.useRef();
  const circleRef = React.useRef(); 
  
  const isStart = () => {
    window.scrollTo({
      top: 0
    })
  }
  
  React.useEffect(() => {
    const circleLength = circleRef.current.getTotalLength();

    window.addEventListener("scroll", () => {
      const getSctollTop = () => {
        return window.pageYOffset || document.documentElement.scrollTop;
      }

      const updateDashoffset = () => {
        const heigth = document.documentElement.scrollHeight - window.innerHeight;
        const dashoffset = circleLength - (getSctollTop() * circleLength / heigth);

        circleRef.current.style.strokeDashoffset = dashoffset
      };
      updateDashoffset()

      getSctollTop() > offset ? setTriggerScroll(true) : setTriggerScroll(false);
    });

  }, []);


  return (
    <div ref={scrollUpRef} className={`${styles.section_scroll_up} ${triggerScroll ? styles.active : ''}`}>
      <svg onClick={isStart} width="50" height="50" viewBox="0 0 50 50" className={styles.circle_svg}>
        <circle ref={circleRef} cx="25" cy="25" r="23.5" fill="none"/>
      </svg>
      <BsBoxArrowUp className={styles.arrow}/>
    </div>
  )
}