import PropTypes from 'prop-types'
import styled from 'styled-components'
import { get } from '../Theme'
import {
    space,
    color,
    borders,
    borderColor,
    borderRadius,
    boxShadow,
    backgroundImage,
    backgroundSize,
    backgroundPosition,
    backgroundRepeat,
    opacity
} from 'styled-system'

const Card = styled.div`
    border-radius: ${get('radii.md')};
    box-shadow: ${get('shadows.lg')};
    ${space}
    ${color}
    ${borders}
    ${borderColor}
    ${borderRadius}
    ${boxShadow}
    ${backgroundImage}
    ${backgroundSize}
    ${backgroundPosition}
    ${backgroundRepeat}
    ${opacity}
`

Card.defaultProps = {
    p: 5,
    bg: 'white'
}

export default Card
