import React from 'react';

const Modal = props => {
    const { title, onClose, children } = props;

    <Modal title="History">
        {/* TODO: make a div with request body stuff inside */}
    </Modal>

    return (
        <div className="overlay">
            <div className="modal">
                <div className="header">
                    <span class="title">{title}</span>
                    <button onClick={onClose}>&times;</button>
                </div>
            <div className="content">
                {children}
            </div>
            </div>
        </div>
    );
}

export default Modal;