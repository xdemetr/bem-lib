import React from 'react';
import cn from 'classnames';

import styles from './RadioGroup_theme_blue.module.scss';

const RadioGroup = (
    {
      tag = 'div', label, direction = 'horizontal', tight,
      className, ...props
    }) => {
  const Tag = tag;

  if (!props.children) return null;

  return (
      <Tag
          className={cn(
              styles['radio-group'],
              direction && styles[`radio-group_direction_${direction}`],
          )} {...props}>

        {label && <span className={styles['radio-group__label']}>{label}</span>}

        {props.children.map((item, idx) => {
          return (
              <div className={styles['radio-group__item']} key={idx}>
                {item}
              </div>
          )
        })}
      </Tag>
  );
};

export default RadioGroup;
