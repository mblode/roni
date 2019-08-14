import styled from 'styled-components'
import { space, color, fontSize, fontStyle, fontWeight, textAlign, lineHeight, letterSpacing } from 'styled-system'

const Text = styled.p`
    word-wrap: break-word;

    ${space}
    ${color}
    ${fontSize}
    ${fontStyle}
    ${fontWeight}
    ${textAlign}
    ${lineHeight}
    ${letterSpacing}
`

Text.defaultProps = {
    m: 0,
    fontSize: 2
}

Text.propTypes = {
    ...space.propTypes,
    ...color.propTypes,
    ...fontSize.propTypes,
    ...fontStyle.propTypes,
    ...fontWeight.propTypes,
    ...lineHeight.propTypes,
    ...textAlign.propTypes,
    ...letterSpacing.propTypes
}

export default Text
