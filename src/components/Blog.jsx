import { useState } from 'react';
import '../components/Header.css'
import '../components/normalize.css'
import ImagenBlog from '../img/blog5.webp'
import Modal from './Modal';

const Blog = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <main className="blog">
                <h3>Nuestra Boda</h3>
                <article className="entrada">
                    <div className="entrada__imagen">
                        <picture>
                            <source loading="lazy" srcSet={ImagenBlog} type="image/webp" />
                            <img loading="lazy" src={ImagenBlog} alt="imagen blog" />
                        </picture>
                    </div>

                    <div className="entrada__contenido">
                        <h4 className="no-margin">Comparte con nosotros</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rerum, reprehenderit consequatur perferendis officia, vitae fuga animi temporibus itaque atque reiciendis ea excepturi! Molestias aperiam fugiat deleniti laudantium atque numquam?</p>
                        <button  onClick={handleOpenModal} className="boton boton--primario">Sesion de fotos</button>
                    </div>
                </article>
            </main>
            {modalOpen && <Modal closeModal={handleCloseModal} />}
        </>
    );
};

export default Blog;
