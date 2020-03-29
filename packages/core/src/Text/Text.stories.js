import { storiesOf } from '@storybook/react';
import React from 'react';
import { Text } from '..';

storiesOf('Text', module)
    .add('Default text', () => <Text>Hello, world!</Text>)
    .add('Large text', () => <Text fontSize={3}>Hello, world!</Text>);
