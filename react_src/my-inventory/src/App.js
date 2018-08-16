import React from 'react';
import './App.css';
import Main from './component/main';
import About from './component/about'
import Navbar from './component/navbar'
import {Link} from 'react-router-dom';

const App = () => (
  <div>
    <Navbar/>
    <div className="container">
      <Main/>
    </div>
    <div className="fixed-action-btn">
      <Link to="/items/add" className="btn-floating btn-large red"><i className="fa fa-plus"></i></Link>
    </div>
  </div>
)

export default App;
