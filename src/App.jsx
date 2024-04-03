import Header from './components/Header'
import CountdownTimer from './components/CountdownTimer';
import Blog from './components/Blog';
import './components/Header.css'
import Aside from './components/Aside';


function App() {
  

  return (
    <>
      <Header/>
      <div className="contenedor contenido-principal">
       <Blog/>
       <Aside/>
      </div>
      <CountdownTimer/>
    </>
      
    
  )
}

export default App
