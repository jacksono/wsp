
import React from 'react';
import {Link, IndexLink} from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
        <header>
            <div className="logo">
                <a href="#">
                    <img src="img/doveicon.png"/>
                </a>
            </div>

            <ul className="nav-header">
                <Link to="" activeClassName="active">
                          <span className="glyphicon glyphicon-user"/> GUEST
                          <span className="caret"/>
                </Link>

                <Link to="" activeClassName="active">
                    <li>
                      LOGOUT
                    </li>
                </Link>
            </ul>
        </header>
    );
  }
}
