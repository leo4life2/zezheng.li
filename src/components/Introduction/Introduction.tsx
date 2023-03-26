import React from 'react';

import styles from './Introduction.module.scss';

export interface IntroductionProps {
  prop?: string;
}

export function Introduction({prop = 'default value'}: IntroductionProps) {
  return <div className={styles.Introduction}>Introduction {prop}</div>;
}
