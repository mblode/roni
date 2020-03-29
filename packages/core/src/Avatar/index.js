import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'styled-system';

const Avatar = styled.img.attrs(props => ({
    height: props.size,
    width: props.size
}))`
    overflow: hidden;
    line-height: 1;
    vertical-align: middle;
    border-radius: 9999px;
    ${space};
`;

Avatar.defaultProps = {
    size: 40,
    alt: ''
};

Avatar.propTypes = {
    alt: PropTypes.string.isRequired,
    size: PropTypes.number,
    src: PropTypes.string,
    ...space.propTypes
};

export default Avatar;
