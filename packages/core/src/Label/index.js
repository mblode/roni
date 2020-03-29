import styled from 'styled-components';
import { fontFamily, fontWeight, textAlign, lineHeight, letterSpacing } from 'styled-system';

const Label = styled.label`
    display: inline-block;

    ${fontFamily}
    ${fontWeight}
    ${textAlign}
    ${lineHeight}
    ${letterSpacing}

    &:hover {
        text-decoration: none;
    }
`;

export default Label;
