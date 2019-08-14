import { storiesOf } from '@storybook/react'
import React from 'react'
import { Anchor } from '..'

storiesOf('Anchor', module).add('Default link', () => (
    <Anchor href="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50">Hello, world</Anchor>
))
