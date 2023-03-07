 import './App.css';
 import HomePage from './pages/home';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import './styles/css/global.css';
 import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Footer from './component/footer';
import SiteNavbar from './component/navbar';
import Residential from './pages/residential/index';

function App() {
  return (
    <div className="App">
    <SiteNavbar/>
    <div style={{marginTop:'80px'}}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/residential' element={<Residential />} />
      </Routes>
      </BrowserRouter>
    </div>
      <Footer/>
    </div>
  );
}

export default App;
