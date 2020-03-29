import React from 'react';
import { storiesOf } from '@storybook/react';
import { Alert, Text, Box } from '..';

storiesOf('Alert', module)
    .add('Default alert', () => (
        <Box width={1 / 2} px={2}>
            <Alert>
                <Text>This order was archived on March 7, 2017 at 3:12pm EDT.</Text>
            </Alert>
        </Box>
    ))
    .add('Warning alert', () => (
        <Box width={1 / 2} px={2}>
            <Alert kind='warning'>
                <Text>This order was archived on March 7, 2017 at 3:12pm EDT.</Text>
            </Alert>
        </Box>
    ))
    .add('Success alert', () => (
        <Box width={1 / 2} px={2}>
            <Alert kind='success'>
                <Text>This order was archived on March 7, 2017 at 3:12pm EDT.</Text>
            </Alert>
        </Box>
    ))
    .add('Danger alert', () => (
        <Box width={1 / 2} px={2}>
            <Alert kind='danger'>
                <Text>This order was archived on March 7, 2017 at 3:12pm EDT.</Text>
            </Alert>
        </Box>
    ));
