import { storiesOf } from '@storybook/react'
import React from 'react'
import { Tooltip, Box } from '..'

storiesOf('Tooltip', module).add('Default tooltip', () => (
    <Box m={4}>
        <Tooltip text="Hello, Tooltip!" direction="s">
            Text with a tooltip
        </Tooltip>
    </Box>
))
