import React from 'react';
import { boolean, radios, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../../components/Button';

const stories = storiesOf('Buttons', module);

export const actionsData = {
  onClick: action('onClick')
};

stories.add('Button', () =>
  <Button
    mod={radios('mod', ["base", "primary"], "base" ) }
    disabled={boolean('Disabled', false)}
    title="Simple title"
    {...actionsData}
  >
    {text('Button text', 'Button text')}
  </Button>, {
  info: { inline: true },
  options: {
    showRoots: true
  }
});
