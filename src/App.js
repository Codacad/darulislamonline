import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import 'swiper/css/bundle'
import './css/App.css';
import Navbar from './components/Navbar';
import { WhatsApp } from '@mui/icons-material';


function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}></Route>
          </Routes>
          <div className="whatsapp">
            <a href="https://wa.me/+919720070250?text=Assalamualaikum" target='_blank'>
              <WhatsApp></WhatsApp>
            </a>
          </div>
        </Router>
    </div>
  );
}

export default App;
