import styled from 'styled-components'
import { space, color, width, fontSize, flex, order, alignSelf } from 'styled-system'
import Theme from '../Theme'

const Box = styled.div`
    ${space}
    ${color}
    ${width}
    ${fontSize}
    ${flex}
    ${order}
    ${alignSelf}
`

Box.defaultProps = { Theme }

Box.propTypes = {
    ...space.propTypes,
    ...color.propTypes,
    ...width.propTypes,
    ...fontSize.propTypes
}

export default Box
