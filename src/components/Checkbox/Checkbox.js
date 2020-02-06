import React from 'react';
import cn from 'classnames';
import styles from './Checkbox_theme_blue.module.scss';

const Checkbox = (
    {name, disabled, checked, defaultChecked, value, className, onChange, ...props}
) => {

  return (
      <div className={cn(
          styles['checkbox'],
          disabled && styles['checkbox_disabled'],
          className
      )}>
        <input
            type="checkbox"
            className={styles['checkbox__input']}
            disabled={disabled}
            checked={checked}
            defaultChecked={defaultChecked}
            value={value}
            onChange={onChange}
            id={name} name={name}
        />

        <label
            className={styles['checkbox__label']}
            htmlFor={name}>{props.children}</label>
      </div>
  )
};

export default Checkbox;
