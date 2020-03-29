import { storiesOf } from '@storybook/react';
import React from 'react';
import { Flex, Heading } from '..';

storiesOf('Flex', module).add('Example Flex', () => (
    <Flex>
        <Heading>Hello</Heading>
    </Flex>
));
