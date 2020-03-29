import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import { space } from 'styled-system';
import { get } from '../Theme';

const rotate = keyframes`
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
`;

const size = props => {
    switch (props.size) {
        case 'sm':
            return {
                fontSize: '14px',
                padding: '4px 12px'
            };
        case 'lg':
            return {
                fontSize: '16px',
                padding: '12px 24px'
            };
        default:
            return {
                fontSize: '14px',
                padding: '8px 16px'
            };
    }
};

const kindMap = {
    primary: {
        bg: 'colors.blue.5',
        color: 'colors.white',
        border: 'colors.blue.6',
        hoverBg: 'colors.blue.6',
        hoverColor: 'colors.white',
        hoverBorder: 'colors.blue.6'
    },
    basic: {
        bg: 'colors.white',
        color: 'colors.gray.6',
        border: 'colors.gray.3',
        hoverBg: 'colors.gray.1',
        hoverColor: 'colors.gray.6',
        hoverBorder: 'colors.gray.3'
    },
    destructive: {
        bg: 'colors.red.5',
        color: 'colors.white',
        border: 'colors.red.6',
        hoverBg: 'colors.red.6',
        hoverColor: 'colors.white',
        hoverBorder: 'colors.red.6'
    }
};

const loading = props =>
    props.loading &&
    css`
        color: transparent !important;
        min-height: 1rem;
        pointer-events: none;
        position: relative;

        &::after {
            animation: ${rotate} 0.5s infinite linear;
            border: 0.1rem solid #5755d9;
            border-color: ${props => get(kindMap[props.kind] ? kindMap[props.kind].color : '')};
            border-radius: 50%;
            border-right-color: transparent;
            border-top-color: transparent;
            content: '';
            display: block;
            height: 1rem;
            left: 50%;
            margin-left: -0.5rem;
            margin-top: -0.5rem;
            position: absolute;
            top: 50%;
            width: 1rem;
            z-index: 1;
        }
    `;

const block = props =>
    props.block &&
    css`
        display: block;
        width: 100%;
    `;

const Button = styled.button`
    display: inline-flex;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    line-height: 1.5;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out;
    border-radius: ${get('radii.md')};
    background-color: ${props => get(kindMap[props.kind] ? kindMap[props.kind].bg : '')};
    color: ${props => get(kindMap[props.kind] ? kindMap[props.kind].color : '')};
    border-color: ${props => get(kindMap[props.kind] ? kindMap[props.kind].border : '')};
    box-shadow: 0 1px 0 0 rgba(22, 29, 37, 0.05);

    &:disabled {
        opacity: 0.65;
    }

    &:hover,
    &:active {
        background-color: ${props => get(kindMap[props.kind] ? kindMap[props.kind].hoverBg : '')};
        color: ${props => get(kindMap[props.kind] ? kindMap[props.kind].hoverColor : '')};
        border-color: ${props => get(kindMap[props.kind] ? kindMap[props.kind].hoverBorder : '')};

        text-decoration: none;
        background-repeat: repeat-x;
    }

    &:active {
        box-shadow: 0 0 0 0 transparent, inset 0 1px 1px 0 rgba(99, 115, 129, 0.1),inset 0 1px 4px 0 rgba(99, 115, 129, 0.2);
    }

    &:focus {
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
    }

    ${size}
    ${loading}
    ${block}
    ${space};
`;

Button.defaultProps = {
    kind: 'basic',
    size: 'md',
    as: 'button'
};

Button.propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    primary: PropTypes.bool,
    plain: PropTypes.bool,
    destructive: PropTypes.bool,
    ...space.propTypes
};

export default Button;
