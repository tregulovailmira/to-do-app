import React from 'react';
import styles from './Checkbox.module.css';

const Checkbox = (props) => {
  const { onChange, value, children } = props;
  return (
    <label className={styles.checkboxContainer}>
      <input
        type="checkbox"
        onChange={onChange}
        checked={value}
        className={styles.checkbox}
      />
      {children}
    </label>
  );
};

export default Checkbox;
