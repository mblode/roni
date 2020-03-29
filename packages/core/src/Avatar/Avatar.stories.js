import React from 'react';
import { storiesOf } from '@storybook/react';
import { Avatar } from '..';

storiesOf('Avatar', module)
    .add('Default avatar', () => (
        <Avatar src={'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'} alt='Avatar' />
    ))
    .add('Large avatar', () => (
        <Avatar src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' alt='Avatar' size={64} />
    ));
