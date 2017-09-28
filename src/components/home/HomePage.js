
import React from 'react';
import {Link, IndexLink} from 'react-router';

export default class HomePage extends React.Component {
  render() {
    return (
        <header>
            <div className="logo">
                <a href="../../">
                    <img src="img/doveicon.png"/>
                </a>
            </div>
        </header>
    );
  }
}
