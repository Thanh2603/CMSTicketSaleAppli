import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home/Home';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className='App'>
    <Sidebar/>
    <Switch>
          <Route path="/about">
            <Home />
          </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
