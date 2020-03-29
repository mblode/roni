import styled from 'styled-components';
import { space, width, borderColor } from 'styled-system';
import { get } from '../Theme';

const Divider = styled.hr`
    border: 0;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-color: ${get('colors.gray.3')};
    ${space}
    ${width}
    ${borderColor};
`;

Divider.defaultProps = {
    ml: 0,
    mr: 0
};

Divider.propTypes = {
    ...space.propTypes,
    ...width.propTypes,
    ...borderColor.propTypes
};

export default Divider;
