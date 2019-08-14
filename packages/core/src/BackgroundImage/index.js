import PropTypes from 'prop-types'
import styled from 'styled-components'
import { height, width, borderRadius } from 'styled-system'
import { get } from '../Theme'

const image = props => (props.image ? { backgroundImage: `url(${props.image})` } : null)

const BackgroundImage = styled.div`
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: ${get('colors.gray.3')};
    ${image}
    ${height}
    ${width}
    ${borderRadius}
`

BackgroundImage.propTypes = {
    image: PropTypes.string,
    ...height.propTypes,
    ...width.propTypes,
    ...borderRadius.propTypes
}

export default BackgroundImage
