import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { get } from '../Theme';

const ProgressWrap = styled.div`
    display: flex;
    height: 1rem;
    overflow: hidden;
    font-size: 14px;
    background-color: ${get('colors.gray.3')};
    border-radius: ${get('radii.md')};
`;

const ProgressBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${get('colors.white')};
    text-align: center;
    white-space: nowrap;
    background-color: ${get('colors.blue.6')};
    transition: width 0.6s ease;
    width: ${props => props.percent || 0}%;
`;

export default class Progress extends Component {
    static defaultProps = {
        percent: 0
    };

    render() {
        return (
            <ProgressWrap>
                <ProgressBar percent={this.props.percent}></ProgressBar>
            </ProgressWrap>
        );
    }
}

Progress.propTypes = {
    percent: PropTypes.number
};
