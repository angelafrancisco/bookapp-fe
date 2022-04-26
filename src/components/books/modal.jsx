import ReactModal from 'react-modal';

const Modal = (props) => {
    return (
        <ReactModal isOpen={props.isOpen} preventScroll={true} ariaHideApp={false} shouldCloseOnOverlayClick={true} className="modal" overlayClassName="overlay-modal">
            {props.children}
        </ReactModal>
    );
}

export default Modal;