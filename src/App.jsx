
import CountdownTimer from './components/CountdownTimer';
import Blog from './components/Blog';

import Aside from './components/Aside';
import Aside2 from './components/Aside2';
import Blog2 from './components/Blog2';


function App() {

  
  return (
    <>
      {/* <Header/> */}
      <div className="contenedor contenido-principal">
       <Blog/>
       <Aside/>
      </div>
      <CountdownTimer/>
      <Aside2/>
      <Blog2/>
    </>
      
    
  )
}

export default App
