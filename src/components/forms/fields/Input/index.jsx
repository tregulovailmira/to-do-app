import React from 'react';
import { useField } from 'formik';
import styles from './Input.module.css';
import Classnames from 'classnames';

const Input = (props) => {
  const [field] = useField(props);
  const { stylesClasses: { container } = {} } = props;

  const inputClasses = Classnames(container, styles.inputContainer);

  return (
    <>
      <label className={inputClasses}>
        <input {...field} {...props} className={styles.input} />
      </label>
    </>
  );
};

export default Input;
