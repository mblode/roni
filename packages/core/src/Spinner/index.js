import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { get } from '../Theme'

const rotate = keyframes`
    100% {
        transform: rotate(360deg);
    }
`

const dash = keyframes`
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: 90, 200;
        stroke-dashoffset: -35px;
    }

    100% {
        stroke-dashoffset: -125px;
    }
`

export const SvgWrap = styled.svg`
    width: 50px;
    transform-origin: center;
    animation: ${rotate} 2s linear infinite;
`

export const CircleWrap = styled.circle`
    fill: none;
    stroke: ${props => props.stroke || get('colors.blue.6')};
    stroke-width: 3;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
`

class Spinner extends React.Component {
    render() {
        return (
            <SvgWrap viewBox="25 25 50 50">
                <CircleWrap cx="50" cy="50" r="20" stroke={this.props.stroke} />
            </SvgWrap>
        )
    }
}

Spinner.propTypes = {
    stroke: PropTypes.string
}

export default Spinner
