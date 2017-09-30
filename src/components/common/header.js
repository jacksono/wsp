
import React from 'react';
import {Link, IndexLink} from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
        <div className='jumbo'>
          <Link to ="/home">
                <a className="img" >
                <img src="https://www.dropbox.com/s/i2au6inqc4s9n0u/doveicon.png?dl=1" alt='HOME' width="200" height="80"/>
                </a>
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
