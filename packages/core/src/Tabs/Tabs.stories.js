import React from 'react';
import { storiesOf } from '@storybook/react';
import { Tabs, TabList, Tab, TabPanel } from '..';

storiesOf('Tab', module).add('Default tabs', () => (
    <Tabs selectedTabClassName='is-selected' selectedTabPanelClassName='is-selected'>
        <TabList>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
        </TabList>
        <TabPanel>Panel 1</TabPanel>
        <TabPanel>Panel 2</TabPanel>
        <TabPanel>Panel 3</TabPanel>
    </Tabs>
));
