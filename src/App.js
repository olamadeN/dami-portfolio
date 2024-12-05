import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from './pages/homepage/homepage';
import Navbar from './components/nav/nav';
import Work from './pages/work/work';
import About from './pages/about/about';
import Cv from './pages/CV/cv';
import Contact from './pages/contact/contact';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
     
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Homepage/>} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<Work />} />
{/*           <Route path='/cv' element={<Cv />} /> */}
          <Route path='/project/:title' element={<Contact />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
