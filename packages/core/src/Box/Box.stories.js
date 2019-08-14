import { storiesOf } from '@storybook/react'
import React from 'react'
import { Box, Flex, Heading } from '..'

storiesOf('Box', module)
    .add('Example box', () => (
        <Box m={3} p={2} bg="blue.5">
            <Heading>Hello</Heading>
        </Box>
    ))
    .add('Grid box', () => (
        <Flex bg="blue.5">
            <Box bg="blue.3" width={1 / 2} px={2}>
                <Heading>Hello</Heading>
            </Box>

            <Box bg="blue.3" width={1 / 2} px={2}>
                <Heading>Hello</Heading>
            </Box>
        </Flex>
    ))
