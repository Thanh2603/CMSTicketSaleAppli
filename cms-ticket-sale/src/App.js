import logo from './logo.svg';
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home/Home';
import Ticket from './components/Ticket/Ticket';
import Checking from './components/Checking/Checking';
import Setting from './components/Setting/Setting';
function App() {
  return (
    <div className='App'>
    <Sidebar/>
    {/* <Link to = "/home"> Trang Chủ</Link>
    <Link to = "/ticket"> Quản Lý Vé</Link>
    <Link to = "/checkingticket"> Đối Soát Vé</Link>
    <Link to = "/setting">Cài Dat</Link> */}

    <Routes>
      <Route path="/home" element={<Home/>} />
    </Routes>
    <Routes>
      <Route path="/ticket" element={<Ticket/>} />
    </Routes> <Routes>
      <Route path="/checkingticket" element={<Checking/>} />
    </Routes> <Routes>
      <Route path="/setting" element={<Setting/>} />
    </Routes>
    
    </div>

  );
}

export default App;
