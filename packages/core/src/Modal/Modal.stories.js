import React, { Component, Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { Modal, Button } from '..'
// import styled from 'styled-components'

class ModalStory extends Component {
    state = { show: false }

    showModal = () => {
        this.setState({ show: true })
    }

    hideModal = () => {
        this.setState({ show: false })
    }

    render() {
        return (
            <Fragment>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <p>Modal</p>
                    <p>Data</p>
                </Modal>

                <Button onClick={this.showModal}>Open</Button>
            </Fragment>
        )
    }
}

storiesOf('Modal', module).add('Default modal', () => <ModalStory />)
