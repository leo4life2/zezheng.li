import React from 'react';

import styles from './Lane.module.scss';

export interface LaneProps {
  prop?: string;
}

export function Lane({prop = 'default value'}: LaneProps) {
  return <div className={styles.Lane}>Lane {prop}</div>;
}
