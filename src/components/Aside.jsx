import  { useState } from 'react';



function LocationRedirectButton() {
    const [loading, setLoading] = useState(false);

   
    
        function redirectToLocation() {
            setLoading(true);
            const latitude = 18.4560087; // Coordenada de latitud del Metro Country Club en Juan Dolio
            const longitude = -69.3676062; // Coordenada de longitud del Metro Country Club en Juan Dolio
            const locationURL = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
            window.location.href = locationURL;
        }

    return (
        <button onClick={redirectToLocation} disabled={loading} className="boton boton--secundario">
           {loading ? 'Cargando...' : (
        <>
            <i className="fas fa-map-marker-alt"></i>  Ver ubicación
        </>
    )}
</button>
    );
}

const Aside = () => {
    return (
        <aside className="sidebar" id="lugar">
            <h3>Ubicación</h3>

            <ul className="cursos no-padding">
                
                <li className="widget-curso">
                    
                    <p className="widget-curso__label">Finca: 
                        <span className="widget-curso__info"> Doña Mirtha</span>
                    </p>
                    <LocationRedirectButton />
                    
                </li>
            </ul>
        </aside>
    );
};

export default Aside;
