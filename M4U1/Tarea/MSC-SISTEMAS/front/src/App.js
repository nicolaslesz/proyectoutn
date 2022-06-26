import './App.css';
import Header from './component/layout/Header';
import Nav from './component/layout/Nav';
import Footer from './component/layout/Footer';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Indice from './pages/Indice';
import Software from './pages/Software';
import Referencias from './pages/Referencias';
import Contacto from './pages/Contacto';

function App() {
  return (
    <div className="App">
   <Header/>

   <BrowserRouter>
   <Nav/>
<Routes>
<Route path='/' element={<Indice />}/>
<Route path='/software' element={<Software />}/>
<Route path='/referencias' element={<Referencias />}/>
<Route path='/contacto' element={<Contacto />}/>
</Routes>  
   </BrowserRouter>
   <Footer/>
    </div>
  );
}

export default App;
