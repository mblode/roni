import { TabPanel as RTabPanel } from 'react-tabs';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, color } from 'styled-system';

const TabPanel = styled(RTabPanel).attrs({
    role: 'TabPanel'
})`
    display: none;

    &.is-selected {
        display: block;
    }

    ${space}
    ${color}
`;

TabPanel.propTypes = {
    ...color.propTypes,
    ...space.propTypes
};

export default TabPanel;
