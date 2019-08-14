import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
// import { Transition } from 'react-transition-group'
// import { color, width, height } from 'styled-system'
// import { Box } from 'pikcha-frame'

const show = props =>
    props.show &&
    css`
        display: block;
    `

const StyledModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: none;

    ${show}
`

const ModalMain = styled.section`
    position: fixed;
    background: white;
    width: 80%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const Modal = ({ handleClose, show, children }) => {
    return (
        <StyledModal show={show}>
            <ModalMain>
                {children}
                <button onClick={handleClose}>Close</button>
            </ModalMain>
        </StyledModal>
    )
}

// Modal.defaultProps = {
//     isOpen: false,
//     disableCloseButton: false,
//     enableOverflow: false,
//     header: null,
//     bg: 'white',
//     height: 420
// }

// Modal.propTypes = {
//     ...width.propTypes,
//     ...height.propTypes,
//     isOpen: PropTypes.bool,
//     disableCloseButton: PropTypes.bool,
//     enableOverflow: PropTypes.bool,
//     onClose: PropTypes.func,
//     bg: PropTypes.string,
//     zIndex: PropTypes.number,
//     title: PropTypes.string,
//     headerBg: PropTypes.string,
//     imgMode: PropTypes.bool,
//     className: PropTypes.string,
//     header: PropTypes.any
// }

export default Modal
