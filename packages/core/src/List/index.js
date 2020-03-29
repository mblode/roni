import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { space, color } from 'styled-system';

const unstyled = props =>
    props.unstyled &&
    css`
        padding-left: 0;
        list-style: none;

        li {
            list-style: none;
        }
    `;

const inline = props =>
    props.inline &&
    css`
        padding-left: 0;
        list-style: none;

        li {
            display: inline-block;
        }

        li:not(:last-child) {
            margin-right: 1rem;
        }
    `;

const List = styled.ul`
    ${space}
    ${color}
    ${unstyled}
    ${inline}
`;

List.defaultProps = {
    as: 'ul',
    m: 0
};

List.propTypes = {
    ...space.propTypes,
    ...color.propTypes,
    unstyled: PropTypes.bool,
    inline: PropTypes.bool
};

export default List;
