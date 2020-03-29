import { storiesOf } from '@storybook/react';
import React from 'react';
import { Spinner } from '..';

storiesOf('Spinner', module)
    .add('Default spinner', () => <Spinner />)
    .add('Color spinner', () => <Spinner stroke='#f68a30' />);
