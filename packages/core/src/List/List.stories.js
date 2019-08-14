import { storiesOf } from '@storybook/react'
import React from 'react'
import { List, ListItem } from '..'

storiesOf('List', module)
    .add('Unordered list', () => (
        <List>
            <ListItem>First item</ListItem>
            <ListItem>Second item</ListItem>
            <ListItem>Third Item</ListItem>
        </List>
    ))
    .add('Ordered list', () => (
        <List as="ol">
            <ListItem>First item</ListItem>
            <ListItem>Second item</ListItem>
            <ListItem>Third Item</ListItem>
        </List>
    ))
    .add('Unstyled list', () => (
        <List unstyled>
            <ListItem>First item</ListItem>
            <ListItem>Second item</ListItem>
            <ListItem>Third Item</ListItem>
        </List>
    ))
    .add('Inline list', () => (
        <List inline>
            <ListItem>First item</ListItem>
            <ListItem>Second item</ListItem>
            <ListItem>Third Item</ListItem>
        </List>
    ))
