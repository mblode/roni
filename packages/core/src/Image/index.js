import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { height, borderRadius } from 'styled-system'
import { get } from '../Theme'

const thumbnail = props =>
    props.thumbnail &&
    css`
        position: relative;
        display: block;
        border-radius: ${get('radii.md')};
        background: ${get('colors.white')};
        border: 1px solid rgba(33, 43, 54, 0.1);
        min-width: 4rem;
        max-width: 100%;
        width: 6rem;
    `

const Image = styled.img`
    max-width: 100%;
    height: auto;
    ${height}
    ${borderRadius}
    ${thumbnail}
`

Image.defaultProps = {
    as: 'img',
    m: 0
}

Image.propTypes = {
    ...height.propTypes,
    ...borderRadius.propTypes,
    thumbnail: PropTypes.bool
}

export default Image
