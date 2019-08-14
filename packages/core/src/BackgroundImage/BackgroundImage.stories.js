import { storiesOf } from '@storybook/react'
import React from 'react'
import { BackgroundImage, Box, Heading } from '..'

storiesOf('BackgroundImage', module).add('Default image', () => (
    <BackgroundImage image="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1024&q=20">
        <Box p={4}>
            <Heading fontSize={6} align="center" color="white">
                Hello
            </Heading>
        </Box>
    </BackgroundImage>
))
