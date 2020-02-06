import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Radio from '../../components/Radio';

const stories = storiesOf('Radio', module);

export const actionsData = {
  onChange: action('onChange')
};

stories.add('Radio', () =>
    <Radio
      id="r01"
      defaultChecked={boolean('Checked', false)}
      disabled={boolean('Disabled', false)}
      {...actionsData}
    >
      {text('Radio text', 'Radio')}
    </Radio>
  , {
    info: { inline: true }
  });
