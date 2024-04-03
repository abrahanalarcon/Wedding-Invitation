import  { useState } from 'react';
import '../components/Header.css';
import '../components/normalize.css';

function LocationRedirectButton() {
    const [loading, setLoading] = useState(false);

    function redirectToLocation() {
        setLoading(true);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const locationURL = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
                window.location.href = locationURL;
            });
        } else {
            alert("La geolocalización no es compatible con este navegador.");
            setLoading(false);
        }
    }

    return (
        <button onClick={redirectToLocation} disabled={loading}  className="boton boton--secundario">
            {loading ? 'Cargando...' : 'Ir a la ubicación'}
        </button>
    );
}

const Aside = () => {
    return (
        <aside className="sidebar">
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
                    <p className="widget-curso__label">Hora de Inicio: 
                        <span className="widget-curso__info"> 3:30pm</span>
                    </p>
                    <LocationRedirectButton />
                    
                </li>
                <li className="widget-curso">
                    <p className="widget-curso__label">No olvides confirmar tu cita</p>
                    <a href="entrada.html" className="boton boton--secundario">Confirmar con el novio</a>
                    <a href="entrada.html" className="boton boton--secundario">Confirmar con la novia</a>
                </li>
            </ul>
        </aside>
    );
};

export default Aside;
