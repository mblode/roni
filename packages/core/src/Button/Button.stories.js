import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button } from '..';

storiesOf('Button', module)
    .add('Basic button', () => <Button>Basic button</Button>)
    .add('Primary button', () => <Button kind='primary'>Primary button</Button>)
    .add('Destructive button', () => <Button kind='destructive'>Destructive button</Button>)
    .add('Loading button', () => <Button loading>Loading button</Button>)
    .add('Disabled button', () => <Button disabled>Disabled button</Button>)
    .add('Disabled primary button', () => (
        <Button kind='primary' disabled>
            Disabled button
        </Button>
    ))
    .add('Small button', () => <Button size='sm'>Small button</Button>)
    .add('Large button', () => <Button size='lg'>Large button</Button>)
    .add('Block button', () => <Button block>Block button</Button>);
