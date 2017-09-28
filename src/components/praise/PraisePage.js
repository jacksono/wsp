
import React from 'react';
import {Link, IndexLink} from 'react-router';

export default class HomePage extends React.Component {
  render() {
    return (
        <div>
        <form className='form-horizontal'>
            <div className='form-group'>
            <a className="btn-img" href="#">
            <img src="https://www.dropbox.com/s/c0xnyvntn4xlxvv/backbtn.png?dl=1" width="60" height="80"/>
            </a>

            <header className="patient-header">
            <p className='title'>PRAISE </p>
          </header>
              </div>

            </form>
        </div>
    );
  }
}
