import React from 'react';

import styles from "./styles.module.scss";

export function NameTitleInput({ title }) {
  return (
    <h4 className={ styles.form_title }>{ title }</h4>
  )
}
