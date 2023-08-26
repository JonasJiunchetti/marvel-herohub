import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CharacterInfo from './pages/CharacterInfo.jsx'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/character/:characterId" element={<CharacterInfo/>} />
      </Routes>
    </Router>
  );
}

export default App;



