import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import 'swiper/css/bundle'
import './css/App.css';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/aluloomonline" element={<Home/>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
