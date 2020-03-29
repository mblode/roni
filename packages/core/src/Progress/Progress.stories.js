import { storiesOf } from '@storybook/react';
import React from 'react';
import { Progress } from '..';

storiesOf('Progress', module)
    .add('Progress bar 0%', () => <Progress percent={0} />)
    .add('Progress bar 50%', () => <Progress percent={50} />)
    .add('Progress bar 100%', () => <Progress percent={100} />);
