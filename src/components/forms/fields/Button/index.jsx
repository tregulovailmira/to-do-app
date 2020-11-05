import React from 'react';
import styles from './Button.module.css';
import Classnames from 'classnames';

const Button = ({
  type,
  children,
  stylesClasses: { container } = {},
  onClick = () => {},
}) => {
  const buttonClasses = Classnames(container, styles.button);
  return <button type={type} className={buttonClasses}>{children}</button>;
};

export default Button;
