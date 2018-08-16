import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const navbar = () => (
  <div>
    <div>
        <nav className="red darken-3">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">Inventory</a>
            <a data-activates="main-menu" className="button-collapse show-on-large">
              <i className="fa fa-bars"></i>
              </a>
            <ul className="right hide-on-small-only">
              <li><Link to="/"><i className="fa fa-shopping-bag"></i> Inventory</Link></li>         
            </ul>
            <ul className="side-nav sideLayout" id="main-menu">
            <li><Link to="/"><i className="fa fa-shopping-bag"></i> Inventory</Link></li>  
            <li><Link to="/items/add"><i className="fa fa-plus"></i> Add Item</Link></li>  
            <li><Link to="/about"><i className="fa fa-question-circle"></i>About</Link></li> 
            </ul>
          </div>
        </nav>
    </div>
  </div>
)

export default navbar;
