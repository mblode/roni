import styled from 'styled-components'
import { space, color, fontSize, fontStyle, fontWeight, textAlign, lineHeight, letterSpacing } from 'styled-system'
import { get } from '../Theme'

const Heading = styled.h1`
    margin-bottom: 0.5rem;
    color: ${get('colors.gray.7')};
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

Heading.defaultProps = {
    m: 0,
    fontSize: 7,
    fontWeight: 'bold'
}

Heading.propTypes = {
    ...space.propTypes,
    ...color.propTypes,
    ...fontSize.propTypes,
    ...fontStyle.propTypes,
    ...fontWeight.propTypes,
    ...lineHeight.propTypes,
    ...textAlign.propTypes,
    ...letterSpacing.propTypes
}

export default Heading
