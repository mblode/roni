import { storiesOf } from '@storybook/react';
import React from 'react';
import { Image } from '..';

storiesOf('Image', module)
    .add('Default image', () => (
        <Image
            height={200}
            src='https://images.unsplash.com/photo-1519219788971-8d9797e0928e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2228&q=80'
            alt='Image'
            borderRadius='radii.md'
        />
    ))
    .add('Thumbnail image', () => (
        <Image
            src='https://images.unsplash.com/photo-1519219788971-8d9797e0928e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2228&q=80'
            alt='Image'
            thumbnail
        />
    ));
