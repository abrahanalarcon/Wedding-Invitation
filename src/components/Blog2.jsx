import { useState } from 'react';

import ImagenBanckAccount from '../img/5.png';
import ImagenProtocol from '../img/6.png';
import LastMotto from '../img/7.png';
import Modal from './Modal';

const Blog2 = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <main className="blog" id="blog">
               
               
                <article className="entrada">
                    <div className="entrada__imagen">
                        <picture>
                            <source loading="lazy" srcSet={ImagenBanckAccount} type="image/webp" />
                            <img loading="lazy" src={ImagenBanckAccount} alt="imagen blog" />
                        </picture>
                    </div>

                    <div className="entrada__contenido">
                        <button onClick={handleOpenModal} className="boton boton--primario">
                        <i className="fas fa-university"></i>Cuentas de Banco</button>
                    </div>  
                </article>

                <article className="entrada">
                    <div className="entrada__imagen">
                        <picture>
                            <source loading="lazy" srcSet={ImagenProtocol} type="image/webp" />
                            <img loading="lazy" src={ImagenProtocol} alt="imagen blog" />
                        </picture>
                    </div>
                </article>
                <article className="entrada">
                    <div className="entrada__imagen">
                        <picture>
                            <source loading="lazy" srcSet={LastMotto} type="image/webp" />
                            <img loading="lazy" src={LastMotto} alt="imagen blog" />
                        </picture>
                    </div>
                </article>
            </main>
            {modalOpen && <Modal closeModal={handleCloseModal} />}
        </>
    );
};

export default Blog2;
