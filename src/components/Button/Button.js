import React from 'react';
import cn from 'classnames';

import styles from './Button_theme_blue.module.scss';

const Button = (
  {
    size,
    disabled,
    mod = 'base',
    icon,
    className,
    isLoading,
    htmlType,
    onClick,
    ...props
  }) => {
  const Tag = props.href ? "a" : "button";
  const buttonIcon = icon ? <i className={`${styles['button__icon']} icon-${icon}`}></i> : null;
  const loadingIcon = isLoading ?
    <i className={`${styles['button__icon']} ${styles['button__icon_spinner']} icon-spinner`}></i> : null;

  return (
    <Tag
      className={cn(
        styles.button,
        disabled && styles.button_disabled,
        mod && styles[`button_mod_${mod}`],
        size && styles[`button_${size}`],
      )}
      {...props}
      type={htmlType}
      onClick={onClick}
    >
      {buttonIcon}
      {loadingIcon}
      <span className={styles.button__text}>{props.children}</span>
    </Tag>
  );
};

export default Button;
