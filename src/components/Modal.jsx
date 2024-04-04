import '../components/modal.css'
import CerrarBtn from '../img/cerrar.svg'


const Modal = ({closeModal}) => {

  

    

  

   
  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img
               src={CerrarBtn}
               alt="cerrar modal"
               onClick={closeModal}
            />
        </div>
        
    </div>
  )
}

export default Modal
