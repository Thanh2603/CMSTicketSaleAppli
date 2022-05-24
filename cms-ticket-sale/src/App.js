import logo from './logo.svg';
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home/Home';
function App() {
  return (
    <div className='App'>
    <Sidebar/>
    <Routes>
      <Route path="/home" element={<Home/>} />
    </Routes>
    </div>

  );
}

export default App;
