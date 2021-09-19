import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Anggota from './Components/Anggota/Index';
import Masuk from './Components/Masuk/Index';


function App() {
  return (
    <BrowserRouter>
      <header>
        <div className="title">
          <Link className="text" to="/">
            Home
          </Link>
        </div>
        <nav>
          <Link className="text" to="/masuk">
            Masuk
          </Link>       
        </nav>
      </header>

      <Switch>
        <Route path="/" exact component={Anggota}/>
        <Route path="/masuk" exact component={Masuk}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
