import { TabList as RTabList } from 'react-tabs';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, color } from 'styled-system';

const TabList = styled(RTabList).attrs({
    role: 'TabList'
})`
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 1rem;
    list-style: none;
    border-bottom: 1px solid #dee2e6;

    ${space}
    ${color}
`;

TabList.propTypes = {
    ...color.propTypes,
    ...space.propTypes
};

export default TabList;
