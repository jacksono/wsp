
import React from 'react';
import {Link, IndexLink} from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
        <div className='jumbo-foot'>
          <Link to ="/home" className="img">
                <img src={require('./dove.png') } alt='HOME' width="30" height="25"/>
          </Link>
          <Link to ="/home" className="img-foot">
                <img src={require('./dove.png') } alt='HOME' width="30" height="25"/>
          </Link>
          <nav className="nav">  Quick Links >> <Link to="/">HOME</Link> | <Link to="/search">SEARCH</Link>   |   <Link to="/categories">CATEGORIES</Link> | <Link to="/add/ ">ADD</Link> </nav>

        </div>
    );
  }
}
