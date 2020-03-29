import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, color } from 'styled-system';
import { get } from '../Theme';

const kindMap = {
    default: { color: 'colors.gray.7', bg: 'colors.white' },
    success: { color: 'colors.green.7', bg: 'colors.green.1' },
    warning: { color: 'colors.yellow.7', bg: 'colors.yellow.1' },
    danger: { color: 'colors.red.7', bg: 'colors.red.1' }
};

const Badge = styled.span`
    font-size: 12px;
    font-variant: tabular-nums;
    font-feature-settings: 'tnum';
    display: inline-block;
    border-radius: ${get('radii.full')};
    font-weight: 500;
    white-space: nowrap;
    vertical-align: baseline;
    color: ${props => get(kindMap[props.kind] ? kindMap[props.kind].color : '')};
    background-color: ${props => get(kindMap[props.kind] ? kindMap[props.kind].bg : '')};
    ${space}
    ${color}

    &:empty {
        visibility: hidden;
    }
`;

Badge.defaultProps = {
    kind: 'default',
    px: 2,
    py: 1
};

Badge.propTypes = {
    ...color.propTypes,
    ...space.propTypes
};

export default Badge;
