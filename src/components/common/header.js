
import React from 'react';
import {Link, IndexLink} from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
        <div className='jumbo'>
          <Link to ="/home" className="img">
                <img src={require('./doveicon.png') } alt='HOME' width="200" height="80"/>
          </Link>

                <Link to="/home" activeClassName="active">
                  <p className="header float-right"> GUEST </p>
                </Link>
                <Link to="/admin" activeClassName="active">
                  <p className="header float-right"> ADMIN </p>
                </Link>
        </div>
    );
  }
}
