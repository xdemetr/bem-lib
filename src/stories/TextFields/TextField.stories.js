import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';
import TextField from '../../components/TextField';
import { items } from '../../components/Icons/Icons'
import { action } from '@storybook/addon-actions';

const stories = storiesOf('Text Fields', module);

export const actionsData = {
  onClick: action('onClick')
};

stories.add('TextField', () =>
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <TextField
        id="inp01"
        name="inp01"
        label={text('Label', "Your name")}
        animateLabel={boolean('Animate label', false)}
        disabled={boolean('Disabled', false)}
        placeholder="Enter your name"
      />
    </div>
  , {
    info: { inline: true }
  });

stories.add('TextField with icon', () =>
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <TextField
        type="password"
        id="inp02"
        name="inp02"
        label={text('Label', "Password")}
        animateLabel={boolean('Animate label', false)}
        disabled={boolean('Disabled', false)}
        placeholder="Enter password"
        icon={select('Icon', items, 'secure')}
      />
    </div>
  , {
    info: { inline: true }
  });

stories.add('TextField with button', () =>
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <TextField
        id="inp03"
        name="inp03"
        success={boolean('Status - Success', false)}
        error={boolean('Status - Error', false)}
        label={text('Label', "Your name")}
        animateLabel={boolean('Animate label', false)}
        disabled={boolean('Disabled', false)}
        button={text('Button text', "Upload")}
        buttonOnClick={actionsData.onClick}
      />
    </div>
  , {
    info: { inline: true }
  });

stories.add('TextField status', () =>
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <TextField
        id="inp04"
        name="inp04"
        success={boolean('Status - Success', false)}
        error={boolean('Status - Error', false)}
        label={text('Label', "Your name")}
        animateLabel={boolean('Animate label', false)}
        disabled={boolean('Disabled', false)}
        note={text('Note', 'Textfield note')}
      />
    </div>
  , {
    info: { inline: true }
  });
