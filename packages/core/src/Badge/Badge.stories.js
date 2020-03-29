import { storiesOf } from '@storybook/react';
import React from 'react';
import { Badge } from '..';

storiesOf('Badge', module)
    .add('Default badge', () => <Badge>Default</Badge>)
    .add('Warning badge', () => <Badge kind='warning'>Warning</Badge>)
    .add('Success badge', () => <Badge kind='success'>Success</Badge>)
    .add('Danger badge', () => <Badge kind='danger'>Danger</Badge>);
