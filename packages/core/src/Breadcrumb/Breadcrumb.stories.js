import { storiesOf } from '@storybook/react'
import React from 'react'
import { Breadcrumb, BreadcrumbItem } from '..'

storiesOf('Breadcrumb', module).add('Breadcrumb', () => (
    <Breadcrumb>
        <BreadcrumbItem>
            <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Library</BreadcrumbItem>
        <BreadcrumbItem>Library</BreadcrumbItem>
    </Breadcrumb>
))
