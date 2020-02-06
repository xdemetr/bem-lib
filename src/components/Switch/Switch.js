import React from 'react';
import cn from 'classnames';
import styles from './Switch_theme_blue.module.scss';

const Switch = (
  {
    name, disabled, checked, value,
    className, onChange, dynamicLabels,
    labels, ...props
  }
) => {

  return (
    <div className={cn(
      styles['switch'],
      disabled && styles['switch_disabled'],
      dynamicLabels && styles['switch_dynamic-labels'],
      className
    )}>
      <input
        type="checkbox"
        className={styles['switch__input']}
        defaultChecked={checked}
        disabled={disabled} value={value}
        onChange={onChange}
        id={name} name={name}
      />

      <label
        data-on="on"
        data-off="off"
        className={styles['switch__label']}
        htmlFor={name}>{props.children}</label>
    </div>
  )
};

export default Switch;
