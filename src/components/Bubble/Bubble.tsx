import React from 'react';

import styles from './Bubble.module.scss';

export interface BubbleProps {
  prop?: string;
}

export function Bubble({prop = 'default value'}: BubbleProps) {
  return <div className={styles.Bubble}>Bubble {prop}</div>;
}
