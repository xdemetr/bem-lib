import React from 'react';

const TextFieldButton = ({button, buttonIcon, buttonOnClick, styles}) => {
  if (!button) return null;

  const buttonContent = buttonIcon ?
      <i className={`${styles['text-field__button-icon']} icon-${buttonIcon}`}></i> : button;

  return (
      <button
          title={buttonIcon && button}
          className={styles['text-field__button']}
          onClick={buttonOnClick}>
        {buttonContent}
      </button>
  )
};

export default TextFieldButton;
