import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/pages/Button';

storiesOf('Button', module)
    .add('with text', () => (
        <ClickButton onClick={action('clicked')}>Hello Button</ClickButton>
    ))
    .add('with some emoji', () => (
        <ClickButton onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></ClickButton>
    ));