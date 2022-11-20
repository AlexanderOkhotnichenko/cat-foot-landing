import React from 'react';

import styles from "./styles.module.scss";

export function PrimaryButton({children ,props}) {
  return (
    <button className={ styles.primary_button } { ...props } data-aos="zoom-in" data-aos-delay="200" data-aos-duration="800">{children}</button>
  )
}
