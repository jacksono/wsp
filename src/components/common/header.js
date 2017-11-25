
import React from 'react';
import {Link, IndexLink} from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
        <div className='jumbo'>
          <Link to ="/home" className="img">
                <img src={require('./doveicon.png') } alt='HOME' width="200" height="80"/>
          </Link>
          <Link to ="/home" className="float-right">
                <img src={require('./sw2.png') } alt='HOME' width="150" height="80"/>
          </Link>
        </div>
    );
  }
}
