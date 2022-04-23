import ReactModal from 'react-modal';

const Modal = (props) => {
    return (
        <ReactModal isOpen={props.isOpen} className="modal" overlayClassName="overlay-modal">
            {props.children}
        </ReactModal>
    );
}

export default Modal;