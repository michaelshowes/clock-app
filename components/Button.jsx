'use client';

import styles from './button.module.scss';
import { RxCaretDown, RxCaretUp } from 'react-icons/rx';

export default function Button({ label }) {
  return (
    <button className={styles.btn}>
      <div className={styles.label}>{label}</div>
      <div className={styles.icon}>
        {label === 'more' ? <RxCaretDown /> : <RxCaretUp />}
      </div>
    </button>
  );
}
