import React from 'react';

import styles from './Timeline.module.scss';

export interface TimelineProps {
  prop?: string;
}

export function Timeline({prop = 'default value'}: TimelineProps) {
  return <div className={styles.Timeline}>Timeline {prop}</div>;
}
