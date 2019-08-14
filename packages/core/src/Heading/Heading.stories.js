import { storiesOf } from '@storybook/react'
import React from 'react'
import { Heading } from '..'

storiesOf('Heading', module)
    .add('Heading 1', () => <Heading as="h1">Heading 1</Heading>)
    .add('Heading 2', () => (
        <Heading as="h2" fontSize={6}>
            Heading 2
        </Heading>
    ))
    .add('Heading 3', () => (
        <Heading as="h3" fontSize={5}>
            Heading 3
        </Heading>
    ))
    .add('Heading 4', () => (
        <Heading as="h4" fontSize={4}>
            Heading 4
        </Heading>
    ))
    .add('Heading 5', () => (
        <Heading as="h5" fontSize={3}>
            Heading 5
        </Heading>
    ))
    .add('Heading 6', () => (
        <Heading as="h6" fontSize={2}>
            Heading 6
        </Heading>
    ))
