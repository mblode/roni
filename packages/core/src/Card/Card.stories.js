import { storiesOf } from '@storybook/react'
import React from 'react'
import { Card, Heading, Text } from '..'

storiesOf('Card', module).add('Default card', () => (
    <Card>
        <Heading as="h3" fontSize={5}>
            Heading
        </Heading>
        <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla id quam neque aperiam modi optio corporis
            consequuntur est consectetur, aut quae maiores. Quis, amet. Molestiae facilis eum eius repellendus magni!
        </Text>
    </Card>
))
