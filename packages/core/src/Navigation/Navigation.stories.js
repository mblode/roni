import React from 'react';
import { storiesOf } from '@storybook/react';
import { Navigation } from '..';

storiesOf('Navigation', module).add('Navigation', () => (
    <Navigation
        items={[
            {
                url: '/path/to/place',
                label: 'Home',
                icon: 'home'
            },
            {
                url: '/path/to/place',
                label: 'Orders',
                icon: 'orders',
                badge: '15'
            },
            {
                url: '/path/to/place',
                label: 'Products',
                icon: 'products'
            }
        ]}
    />
));
