import React from 'react';
import cn from 'classnames';
import styles from './CheckboxGroup_theme_blue.module.scss';

const CheckboxGroup = (
  {
    tag = 'div', label, direction = 'horizontal',
    className, ...props
  }) => {
  const Tag = tag;

  if (!props.children) return null;

  return (
    <Tag
      className={cn(
        styles['checkbox-group'],
        direction && styles[`checkbox-group_direction_${direction}`],
      )} {...props}>

      {label && <span className={styles['checkbox-group__label']}>{label}</span>}

      {props.children.map((item, idx) => {
        return (
          <div className={styles['checkbox-group__item']} key={idx}>
            {item}
          </div>
        )
      })}
    </Tag>
  );
};

export default CheckboxGroup;
