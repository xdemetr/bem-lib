import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Switch from '../../components/Switch';
import { boolean } from '@storybook/addon-knobs';

const stories = storiesOf('Switch', module);

export const actionsData = {
  onChange: action('onChange')
};

stories.add('Switch', () =>
    <Switch
      name="sw01"
      id="sw01"
      disabled={boolean('Disabled', false)}
      dynamicLabels={boolean('Dynamic labels', false)}

    >Switch</Switch>
  , {
    info: { inline: true }
  });
