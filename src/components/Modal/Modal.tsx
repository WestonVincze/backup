import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const Modal: React.FC<ModalProps> = ({ isOpen, content, handleClose }) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={handleClose}>
      {content}
    </ReactModal>
  );
};

interface ModalProps {
  isOpen: boolean;
  content: React.ReactNode;
  handleClose: () => void;
}

export default Modal;
