import  { useState } from 'react';
import '../components/Header.css';
import '../components/normalize.css';

function LocationRedirectButton() {
    const [loading, setLoading] = useState(false);

   
    
        function redirectToLocation() {
            setLoading(true);
            const latitude = 18.428264; // Coordenada de latitud del Metro Country Club en Juan Dolio
            const longitude = -69.438246; // Coordenada de longitud del Metro Country Club en Juan Dolio
            const locationURL = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
            window.location.href = locationURL;
        }

    return (
        <button onClick={redirectToLocation} disabled={loading}  className="boton boton--secundario">
            {loading ? 'Cargando...' : 'Ir a la ubicación'}
        </button>
    );
}

const Aside = () => {
    return (
        <aside className="sidebar" id="lugar">
            <h3>Ubicación</h3>

            <ul className="cursos no-padding">
                <li className="widget-curso">
                    <h4 className="no-margin">Ceremonia</h4>
                    <p className="widget-curso__label">Iglesia: 
                        <span className="widget-curso__info"> Casa de Salvacion</span>
                    </p>
                
                    <a href="entrada.html" className="boton boton--secundario">Ceremonia</a>
                </li>

                <li className="widget-curso">
                    <h4 className="no-margin">Recepcion</h4>
                    <p className="widget-curso__label">Villa: 
                        <span className="widget-curso__info"> Metro ContryClub</span>
                    </p>
                    <LocationRedirectButton />
                    
                </li>
                <li className="widget-curso">
                    <p className="widget-curso__label">No olvides confirmar tu cita</p>
                    <a href="https://api.whatsapp.com/send?phone=18299688949text=¡Hola! Gracias por hacerme formar parte de este momemto involidable,aqui confimo que estare ahi con ustedes" className="boton boton--secundario">Confirmar con el novio</a>
                    <a href="https://api.whatsapp.com/send?phone=18496375882&text=¡Hola! Gracias por hacerme formar parte de este momemto involidable,aqui confimo que estare ahi con ustedes" className="boton boton--secundario">Confirmar con el novia</a>
                    
                </li>
            </ul>
        </aside>
    );
};

export default Aside;
