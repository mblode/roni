import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, color } from 'styled-system'
import { get } from '../Theme'

const kindMap = {
    default: { border: 'colors.gray.6', color: 'colors.gray.7', bg: 'colors.white' },
    success: { border: 'colors.green.6', color: 'colors.green.7', bg: 'colors.green.1' },
    warning: { border: 'colors.yellow.6', color: 'colors.yellow.7', bg: 'colors.yellow.1' },
    danger: { border: 'colors.red.6', color: 'colors.red.7', bg: 'colors.red.1' }
}

const Alert = styled.div`
    position: relative;
    padding: ${get('space.4')}px;
    color: ${props => get(kindMap[props.kind] ? kindMap[props.kind].color : '')};
    background-color: ${props => get(kindMap[props.kind] ? kindMap[props.kind].bg : '')};
    box-shadow: inset 0 3px 0 0 ${props => get(kindMap[props.kind] ? kindMap[props.kind].border : '')},
        inset 0 0 0 0 transparent, 0 0 0 1px rgba(63, 63, 68, 0.05), 0 1px 3px 0 rgba(63, 63, 68, 0.15);
    border-radius: 0 0 ${get('radii.md')} ${get('radii.md')};

    p:last-child {
        margin-bottom: 0;
    }

    ${color}
    ${space}
`

Alert.defaultProps = {
    kind: 'default'
}

Alert.propTypes = {
    children: PropTypes.node,
    ...color.propTypes,
    ...space.propTypes
}

export default Alert
