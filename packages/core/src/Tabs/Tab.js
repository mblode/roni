import { Tab as RTab } from 'react-tabs'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Tab = styled(RTab).attrs({
    role: 'Tab'
})`
    margin-bottom: -1px;
    display: block;
    padding: 0.5rem 1rem;
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    cursor: pointer;

    &.is-selected {
        color: #495057;
        background-color: #fff;
        border-color: #dee2e6 #dee2e6 #fff;
    }

    &:focus {
        border-color: #e9ecef #e9ecef #dee2e6;
    }

    ${space}
    ${color}
`

Tab.propTypes = {
    ...color.propTypes,
    ...space.propTypes
}

export default Tab
