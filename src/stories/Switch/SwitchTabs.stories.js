import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import SwitchTabs from '../../components/SwitchTabs';

const stories = storiesOf('Switch', module);

export const actionsData = {
  onChange: action('onChange')
};

const swTabsData = [
  { label: 'Yearly', id: 'swt-01', checked: true },
  { label: 'Monthly', id: 'swt-02' },
  { label: 'Daily', id: 'swt-03' },
];

const swTabsData2 = [
  { label: 'Yearly', id: 'swt-04', value: 'yearly' },
  { label: 'Monthly', id: 'swt-05', value: 'monthly' },
];

stories.add('Switch Tabs', () =>
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <SwitchTabs
        disabled={boolean('Disabled', false)}
        data={swTabsData} name="swt-001"
        {...actionsData}
      />
    </div>
  , {
    info: { inline: true }
  });

stories.add('Switch Tabs 2', () =>
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <SwitchTabs
        disabled={boolean('Disabled', false)}
        data={swTabsData2} name="swt-001"
      />
    </div>
  , {
    info: { inline: true }
  });
