import React from 'react';
import { radios, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Radio from '../../components/Radio';
import RadioGroup from '../../components/RadioGroup';

const stories = storiesOf('Radio', module);

export const actionsData = {
  onChange: action('onChange')
};

stories.add('Radio Group', () =>
    <RadioGroup
      label={text('Label', null)}
      direction={radios('Direction', ["horizontal", "vertical"], "horizontal")}
    >
      <Radio id="r01" name="r01">Radio</Radio>
      <Radio id="r02" name="r01">Radio</Radio>
    </RadioGroup>
  , {
    info: { inline: true }
  });
