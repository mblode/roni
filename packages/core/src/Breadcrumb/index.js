import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, color } from 'styled-system';

const Breadcrumb = styled.ol`
    display: flex;
    flex-wrap: wrap;
    list-style: none;

    ${color}
    ${space}
`;

Breadcrumb.defaultProps = {
    kind: 'default'
};

Breadcrumb.propTypes = {
    ...color.propTypes,
    ...space.propTypes
};

export default Breadcrumb;
