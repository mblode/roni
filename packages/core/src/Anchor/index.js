import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, fontSize, fontStyle, fontWeight, textAlign, lineHeight, letterSpacing } from 'styled-system';

const Anchor = styled.a`
    text-decoration: ${props => (props.underline ? 'underline' : 'none')};
    word-wrap: break-word;

    &:hover {
        text-decoration: underline;
    }

    ${color}
    ${fontSize}
    ${fontStyle}
    ${fontWeight}
    ${textAlign}
    ${lineHeight}
    ${letterSpacing}
`;

Anchor.defaultProps = {
    as: 'a',
    color: 'blue.5'
};

Anchor.propTypes = {
    as: PropTypes.oneOf(['a', 'button', 'input', 'summary']),
    href: PropTypes.string,
    underline: PropTypes.bool,
    ...color.propTypes,
    ...fontSize.propTypes,
    ...fontStyle.propTypes,
    ...fontWeight.propTypes,
    ...lineHeight.propTypes,
    ...textAlign.propTypes
};

export default Anchor;
