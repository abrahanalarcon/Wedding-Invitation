
import CerrarBtn from '../img/cerrar.svg';
import ImgAccountDetails from '../img/5_modal.png';

const Modal = ({ closeModal }) => {
    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={CerrarBtn} alt="cerrar modal" onClick={closeModal} />
            </div>
            <div className="modal__content">
                <img src={ImgAccountDetails} alt="imagen 5_modal" className="modal__image" />
            </div>
        </div>
    );
};

export default Modal;