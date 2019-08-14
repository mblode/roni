import React, { Fragment } from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { jsxDecorator } from 'storybook-addon-jsx'
import { ThemeProvider } from '../packages/core/src'

addDecorator(jsxDecorator)

addDecorator(withA11y)

const requests = []

const req1 = require.context('../packages/core/src', true, /\.stories\.js$/)

requests.push(req1)

function loadStories() {
    requests.forEach(req => {
        req.keys().forEach(fname => req(fname))
    })
}

addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>)

configure(loadStories, module)
