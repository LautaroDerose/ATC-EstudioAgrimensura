
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Navbar from './components/Navbar';
import About from './components/About';
import Servicios from './components/Servicios';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Body />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
