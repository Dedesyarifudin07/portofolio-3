import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Project from './pages/Project';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Project' element={<Project/>}/>
      </Routes>
    </>
  
  );
}

export default App;
