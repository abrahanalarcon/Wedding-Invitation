import '../components/modal.css'
import CerrarBtn from '../img/cerrar.svg'
import  { useEffect } from 'react';
import Swiper from 'swiper';
import '../components/swiper-bundle.min.css'; // Importa los estilos de Swiper


const Modal = ({closeModal}) => {
  
   useEffect(() => {
      const swiper = new Swiper(".swiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        speed: 600,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        loop: true,
      });
  
      // Importante: destruir el Swiper cuando el componente se desmonte
      return () => {
        swiper.destroy();
      };
    }, []); // 
  

   
  return (
   
        <div className="modal">
         <div className="cerrar-modal">
            <img
               src={CerrarBtn}
               alt="cerrar modal"
               onClick={closeModal}
            />
         </div>
         < div className='content_swip'>
          <div className="swiper">
           <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="https://i.pinimg.com/736x/89/1e/b5/891eb59b6f15098cb7516b287f0d619f.jpg" alt="imagen 1"/>
            </div>
            <div className="swiper-slide">
              <img 
              src="https://i.pinimg.com/736x/6f/b5/bd/6fb5bd2c93235a36e38e0afdeac3528f.jpg"alt="imagen 1"/>
            </div>
            <div className="swiper-slide">
              <img src="https://i.pinimg.com/originals/75/b4/32/75b432d2ffb2ad1df3a60390f9577c2a.png" alt="imagen 1"/>
            </div>
            <div className="swiper-slide">
              <img src="https://gregdotel.com/wp-content/uploads/2019/05/fotografo-paola-robert-bodas-sesion-novios-jardin-botanico-nacional-santo-domingo-republica-dominicana7.jpg" alt="imagen 1"/>
            </div>
            <div className="swiper-slide">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7MLMdJlhoB6lj8xW0LtUbw0bPya7Hs86hQGr8mkfSaw2cDjCAF5R11jYsO2Dv0uzh6I&usqp=CAU" alt="imagen 1"/>
            </div>
         </div>
          </div>
         
         
         </div>
         </div>
   
   
   
  )
}

export default Modal
