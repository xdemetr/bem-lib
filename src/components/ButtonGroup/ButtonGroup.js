import React from 'react';
import cn from 'classnames';
import styles from './ButtonGroup_theme_blue.module.scss';

const ButtonGroup = (
  {
    tag = 'div', direction = 'horizontal', tight,
    className, ...props
  }) => {
  const Tag = tag;

  if (!props.children) return null;

  return (
    <Tag
      className={cn(
        styles['button-group'],
        direction && styles[`button-group_direction_${direction}`],
        tight && styles['button-group_tight']
      )} {...props}>
      {props.children.map(item => {
        return (
          <div className={styles['button-group__item']}>
            {item}
          </div>
        )
      })}
    </Tag>
  );
};

export default ButtonGroup;
