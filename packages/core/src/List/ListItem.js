import styled from 'styled-components';
import { space, color, fontSize, fontStyle, fontWeight, textAlign, lineHeight, letterSpacing } from 'styled-system';

const ListItem = styled.li`
    ${space}
    ${color}
    ${fontSize}
    ${fontStyle}
    ${fontWeight}
    ${textAlign}
    ${lineHeight}
    ${letterSpacing}
`;

ListItem.defaultProps = {
    m: 0,
    fontSize: 2
};

ListItem.propTypes = {
    ...space.propTypes,
    ...color.propTypes,
    ...fontSize.propTypes,
    ...fontStyle.propTypes,
    ...fontWeight.propTypes,
    ...lineHeight.propTypes,
    ...textAlign.propTypes,
    ...letterSpacing.propTypes
};

export default ListItem;
