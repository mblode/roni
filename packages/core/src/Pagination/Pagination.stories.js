import React from 'react';
import { storiesOf } from '@storybook/react';
import { Pagination } from '..';

storiesOf('Pagination', module).add('Pagination', () => (
    <Pagination
        hasPrevious
        onPrevious={() => {
            console.log('Previous');
        }}
        hasNext
        onNext={() => {
            console.log('Next');
        }}
    />
));
