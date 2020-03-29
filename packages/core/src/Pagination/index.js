import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../Button';

const PaginationWrap = styled.div`
    display: flex;
`;

export default class Pagination extends Component {
    render() {
        return (
            <PaginationWrap>
                <Button onClick={this.props.onPrevious} type='button' disabled={!this.props.hasPrevious}>
                    Prev
                </Button>

                <Button onClick={this.props.onNext} type='button' disabled={!this.props.hasNext}>
                    Next
                </Button>
            </PaginationWrap>
        );
    }
}
