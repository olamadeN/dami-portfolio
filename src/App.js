import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from './pages/homepage/homepage';
import Footer from './components/footer/footer';
import Navbar from './components/nav/nav';

import Work from './pages/work/work';
import About from './pages/about/about';
function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Homepage/>} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<Work />} />
        </Routes>
      </BrowserRouter> 
      <Footer />
    </div>
  );
}

export default App;
