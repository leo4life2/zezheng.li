import React from 'react';

import styles from './Header.module.scss';

export interface HeaderProps {
  prop?: string;
}

export function Header({prop = 'default value'}: HeaderProps) {
  return <div className={styles.Header}>Header {prop}</div>;
}
