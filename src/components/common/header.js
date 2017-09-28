
import React from 'react';
import {Link, IndexLink} from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
        <div className='jumbo'>
                <a className="img" href="#">
                <img src="https://www.dropbox.com/s/i2au6inqc4s9n0u/doveicon.png?dl=1" width="200" height="80"/>
                </a>

                <Link to="" activeClassName="active">
                  <p className="header float-right"> GUEST </p>
                </Link>
        </div>
    );
  }
}