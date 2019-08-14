import styled from 'styled-components'
import {
    space,
    color,
    width,
    fontSize,
    flexWrap,
    flexDirection,
    alignItems,
    justifyContent,
    flex,
    order,
    alignSelf,
    borderRadius
} from 'styled-system'
import Theme from '../Theme'

const Flex = styled.div`
    display: flex;

    ${space}
    ${color}
    ${width}
    ${fontSize}
    ${flexWrap}
    ${flexDirection}
    ${alignItems}
    ${justifyContent}
    ${flex}
    ${order}
    ${alignSelf}
    ${borderRadius}
`

Flex.defaultProps = { Theme }

Flex.propTypes = {
    ...space.propTypes,
    ...color.propTypes,
    ...width.propTypes,
    ...fontSize.propTypes,
    ...flexWrap.propTypes,
    ...flexDirection.propTypes,
    ...alignItems.propTypes,
    ...justifyContent.propTypes,
    ...flex.propTypes,
    ...order.propTypes,
    ...alignSelf.propTypes,
    ...borderRadius.propTypes
}

export default Flex
