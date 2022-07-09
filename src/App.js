import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import 'swiper/css/bundle'
import './css/App.css';
import Navbar from './components/Navbar';


function App() {
  let lastScrole = 0;
  window.addEventListener('scroll', () => {
      const currentScrole = window.pageYOffset || document.documentElement.scrollTop
      if(currentScrole > lastScrole){
        document.querySelector('div.navbar').classList.add('hide-navbar')
      }else{
        document.querySelector('div.navbar').classList.remove('hide-navbar')
      }
        
      lastScrole = currentScrole
  })
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
