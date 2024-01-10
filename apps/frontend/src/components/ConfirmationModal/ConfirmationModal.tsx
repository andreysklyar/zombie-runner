import { Button, Modal } from "react-bootstrap";

interface Props {
    show: boolean
    handleClose?: () => void
    handleDecline?: () => void
    handleConfirm?: () => void
}

const ConfirmationModal: React.FunctionComponent<Props> = (({show, handleClose, handleDecline, handleConfirm}) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>A you shure?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleDecline}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleConfirm}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
});

export default ConfirmationModal;
