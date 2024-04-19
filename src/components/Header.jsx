import '../components/Header.css'
import '../components/normalize.css'


const Header = () => {
  return (
    <div className="header">

        <div className="contenedor">
            <div className="barra">
                <a className="logo" href="index.html">
                    <h1 className="logo__nombre no-margin centrar-texto">Nuestra <span className="logo__bold">Boda</span></h1>
                </a>

               
            </div>
        </div>

        <div className="header__texto">
            <h2 className="no-margin">Estas invitado</h2>
            <p className="no-margin">A compatir con nosotros este marivolloso momento</p>
        </div>
    </div>
  )
}

export default Header
