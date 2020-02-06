import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';
import Checkbox from '../../components/Checkbox';
import { action } from '@storybook/addon-actions';

const stories = storiesOf('Checkbox', module);

export const actionsData = {
  onChange: action('onChange')
};

stories.add('Checkbox', () =>
    <Checkbox
      name={"check01"}
      defaultChecked={boolean('Checked', false)}
      disabled={boolean('Disabled', false)}
      value={"checkboxvalue"}
      {...actionsData}
    >
      {text('Checkbox text', 'Checkbox')}</Checkbox>
  , {
    info: { inline: true }
  });
