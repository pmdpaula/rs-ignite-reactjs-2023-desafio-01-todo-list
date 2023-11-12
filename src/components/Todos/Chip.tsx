import { ReactNode } from 'react';
import styles from './Chip.module.css';

interface ChipProps {
  children: ReactNode;
}

export const Chip = ({ children }: ChipProps) => {
  return (
    <div className={styles.wrapper}>
      <p>{children}</p>
    </div>
  );
};
