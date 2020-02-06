import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, radios } from '@storybook/addon-knobs';
import Tabs from '../../components/Tabs';

const stories = storiesOf('Tabs', module);

stories.add('Tabs', () =>
    <Tabs
      mod={radios('mod', ['v1', 'v2', 'v3'], 'v1')}
      defaultActive={number('Default active tab', 1)}
    >
      <div title="Tab 1">Info 1</div>
      <div title="Tab 2">Info 2</div>
    </Tabs>
  , {
    info: { inline: true }
  });
