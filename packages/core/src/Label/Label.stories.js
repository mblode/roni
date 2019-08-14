import { storiesOf } from '@storybook/react'
import React from 'react'
import { Label } from '..'

storiesOf('Label', module).add('Default label', () => <Label htmlFor="form">Your input</Label>)
