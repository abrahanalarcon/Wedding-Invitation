




const Aside = () => {
    return (
        <aside className="sidebar" id="lugar">
            <h3>Confirma tu Asistencia</h3>

            <ul className="cursos no-padding">
                
                
                <li className="widget-curso">
                <p className="widget-curso__label">
                    No olvides confirmar tu asistencia antes del <span>25 de septiembre del 2024</span>
                </p>
                    <a href="https://api.whatsapp.com/send?phone=18299688949text=¡Hola! Gracias por hacerme formar parte de este momemto involidable,aqui confimo que estare ahi con ustedes" className="boton boton--secundario">
                    <i className="fab fa-whatsapp"></i> 
                    Confirmar con el novio</a>
                    <a href="https://api.whatsapp.com/send?phone=18496375882&text=¡Hola! Gracias por hacerme formar parte de este momemto involidable,aqui confimo que estare ahi con ustedes" className="boton boton--secundario">
                    <i className="fab fa-whatsapp"></i> 
                    Confirmar con la novia</a>
                    
                </li>
            </ul>
        </aside>
    );
};

export default Aside;
