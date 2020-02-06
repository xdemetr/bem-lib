import React from 'react';
import Button from '../../components/Button';
import { boolean, radios } from '@storybook/addon-knobs';

import { storiesOf } from '@storybook/react';
import ButtonGroup from '../../components/ButtonGroup';

const stories = storiesOf('Buttons', module);

stories.add('Button Group', () =>
  <ButtonGroup
    tight={boolean('Tight', false)}
    direction={radios('Direction', ["horizontal", "vertical"], "horizontal")}
  >
    <Button mod={radios('Button mod', ["base", "primary"], "primary")}>button</Button>
    <Button mod={radios('Button mod', ["base", "primary"], "primary")}>button</Button>
    <Button mod={radios('Button mod', ["base", "primary"], "primary")}>button</Button>
  </ButtonGroup>, {
  info: { inline: true }
});
