import React from 'react';

const TextFieldIcon = ({icon, styles}) => {
  if (!icon) return null;
  return <i className={`${styles['text-field__icon']} icon-${icon}`}></i>
};

export default TextFieldIcon;
