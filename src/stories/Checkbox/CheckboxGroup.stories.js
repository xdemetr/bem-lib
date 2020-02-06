import React from 'react';
import { radios, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Checkbox from '../../components/Checkbox';
import CheckboxGroup from '../../components/CheckboxGroup';

const stories = storiesOf('Checkbox', module);

export const actionsData = {
  onChange: action('onChange')
};

stories.add('Checkbox Group', () =>
    <CheckboxGroup
      label={text('Label', null)}
      direction={radios('Direction', ["horizontal", "vertical"], "horizontal")}
    >
      <Checkbox name={"check01"}>Check</Checkbox>
      <Checkbox name={"check02"}>Check</Checkbox>
      <Checkbox name={"check03"}>Check</Checkbox>
    </CheckboxGroup>
  , {
    info: { inline: true }
  });
