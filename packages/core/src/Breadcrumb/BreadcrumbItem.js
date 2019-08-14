import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { space, color } from 'styled-system'
import { get } from '../Theme'

const isActive = props =>
    props.active &&
    css`
        color: ${get('colors.gray.5')};
    `

const Breadcrumb = styled.li`
    &:not(:first-of-type)::before {
        padding-right: 0.5rem;
        display: inline-block;
        color: ${get('colors.gray.5')};
        content: '/';
    }

    & + &:hover::before {
        text-decoration: none;
    }

    padding-left: 0.5rem;
    ${isActive};
`

Breadcrumb.defaultProps = {
    kind: 'default'
}

Breadcrumb.propTypes = {
    active: PropTypes.bool,
    ...color.propTypes,
    ...space.propTypes
}

export default Breadcrumb
