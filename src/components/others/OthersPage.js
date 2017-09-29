
import React from 'react';
import {Link, IndexLink} from 'react-router';
import { Table } from 'reactstrap';

export default class HomePage extends React.Component {
  render() {
    return (
        <div>
        <form className='form-horizontal'>
            <div className='form-group'>
              <a className="btn-img" href="#">
                <img src="https://www.dropbox.com/s/c0xnyvntn4xlxvv/backbtn.png?dl=1" width="60" height="80"/>
              </a>
              <header className="category-header">
                <p className='title'>OTHERS </p>
              </header>
            </div>
            <div className='table-div' >
            <Table striped className='table-rows'>
                  <thead>
                    <tr>
                      <th>TITLE </th>
                      <th>CATEGORY </th>
                      <th>ARTIST </th>
                      <th>TEMPO</th>
                      <th>DATE</th>
                      <th>MESSAGE</th>
                      <th>LINKS</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>TITLE</td>
                    <td>CATEGORY</td>
                    <td>ARTIST</td>
                    <td>TEMPO</td>
                    <td>DATE</td>
                    <td>MESSAGE</td>
                    <td>LINKS</td>
                  </tr>
                  <tr>
                    <td>TITLE</td>
                    <td>CATEGORY</td>
                    <td>ARTIST</td>
                    <td>TEMPO</td>
                    <td>DATE</td>
                    <td>MESSAGE</td>
                    <td>LINKS</td>
                  </tr>
                  <tr>
                    <td>TITLE</td>
                    <td>CATEGORY</td>
                    <td>ARTIST</td>
                    <td>TEMPO</td>
                    <td>DATE</td>
                    <td>MESSAGE</td>
                    <td>LINKS</td>
                  </tr>
                  <tr>
                    <td>TITLE</td>
                    <td>CATEGORY</td>
                    <td>ARTIST</td>
                    <td>TEMPO</td>
                    <td>DATE</td>
                    <td>MESSAGE</td>
                    <td>LINKS</td>
                  </tr>
                  <tr>
                    <td>TITLE</td>
                    <td>CATEGORY</td>
                    <td>ARTIST</td>
                    <td>TEMPO</td>
                    <td>DATE</td>
                    <td>MESSAGE</td>
                    <td>LINKS</td>
                  </tr>
                  </tbody>
            </Table>
            </div>

            </form>
        </div>
    );
  }
}
