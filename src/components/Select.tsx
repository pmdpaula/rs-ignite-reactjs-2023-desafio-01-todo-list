import { Check } from '@phosphor-icons/react';

import styles from './Select.module.css';
import { HTMLAttributes } from 'react';

interface SelectProps extends HTMLAttributes<HTMLDivElement> {
  selected: boolean;
}

export const Select = ({ selected, ...rest }: SelectProps) => {
  return (
    <div
      className={styles.wrapper}
      {...rest}
    >
      <div className={selected ? styles.selected : styles.unselected}>
        {selected && <Check color="white" />}
      </div>
    </div>
  );
};
