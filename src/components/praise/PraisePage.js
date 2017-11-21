
import React from 'react';
import {Link, IndexLink} from 'react-router';
import { Table } from 'reactstrap';

export default class PraisePage extends React.Component {
  render() {
    const praiselist = [
      {
        title: 'ALL MAJESTY AND PRAISE',
        artist: 'S2G PROJECT',
        tempo: 'SLOW',
        date: 'DATE',
        message: 'ALL MAJESTY AND PRAISE',
        links:'NONE'
      },
      {
        title: '0PRAISE ALL THE EARTH',
        artist: 'S2G PROJECT',
        tempo: 'SLOW',
        date: 'DATE',
        message: 'ALL MAJESTY AND PRAISE',
        links:'NONE'
      },
      {
        title: '0HOLY GOD ALMIGHTY',
        artist: 'S2G PROJECT',
        tempo: 'SLOW',
        date: 'DATE',
        message: 'ALL MAJESTY AND PRAISE',
        links:'NONE'
      },
      {
        title: '0FIRE OF THE SPIRIT',
        artist: 'S2G PROJECT',
        tempo: 'SLOW',
        date: 'DATE',
        message: 'ALL MAJESTY AND PRAISE',
        links:'NONE'
      },
      {
        title: '0MY SALVATION THE LORD',
        artist: 'S2G PROJECT',
        tempo: 'SLOW',
        date: 'DATE',
        message: 'ALL MAJESTY AND PRAISE',
        links:'NONE'
      },
      {
        title: '7ALL MAJESTY AND PRAISE',
        artist: 'S2G PROJECT',
        tempo: 'SLOW',
        date: 'DATE',
        message: 'ALL MAJESTY AND PRAISE',
        links:'NONE'
      },
      {
        title: '7PRAISE ALL THE EARTH',
        artist: 'S2G PROJECT',
        tempo: 'SLOW',
        date: 'DATE',
        message: 'ALL MAJESTY AND PRAISE',
        links:'NONE'
      },
      {
        title: '7HOLY GOD ALMIGHTY',
        artist: 'S2G PROJECT',
        tempo: 'SLOW',
        date: 'DATE',
        message: 'ALL MAJESTY AND PRAISE',
        links:'NONE'
      },
      {
        title: '7FIRE OF THE SPIRIT',
        artist: 'S2G PROJECT',
        tempo: 'SLOW',
        date: 'DATE',
        message: 'ALL MAJESTY AND PRAISE',
        links:'NONE'
      },
      {
        title: '7MY SALVATION THE LORD',
        artist: 'S2G PROJECT',
        tempo: 'SLOW',
        date: 'DATE',
        message: 'ALL MAJESTY AND PRAISE',
        links:'NONE'
      },
      {
        title: '2ALL MAJESTY AND PRAISE',
        artist: 'S2G PROJECT',
        tempo: 'SLOW',
        date: 'DATE',
        message: 'ALL MAJESTY AND PRAISE',
        links:'NONE'
      },
      {
        title: '2PRAISE ALL THE EARTH',
        artist: 'S2G PROJECT',
        tempo: 'SLOW',
        date: 'DATE',
        message: 'ALL MAJESTY AND PRAISE',
        links:'NONE'
      },
      {
        title: '2HOLY GOD ALMIGHTY',
        artist: 'S2G PROJECT',
        tempo: 'SLOW',
        date: 'DATE',
        message: 'ALL MAJESTY AND PRAISE',
        links:'NONE'
      },
      {
        title: '2FIRE OF THE SPIRIT',
        artist: 'S2G PROJECT',
        tempo: 'SLOW',
        date: 'DATE',
        message: 'ALL MAJESTY AND PRAISE',
        links:'NONE'
      },
      {
        title: '2MY SALVATION THE LORD',
        artist: 'S2G PROJECT',
        tempo: 'SLOW',
        date: 'DATE',
        message: 'ALL MAJESTY AND PRAISE',
        links:'NONE'
      },{
        title: '3ALL MAJESTY AND PRAISE',
        artist: 'S2G PROJECT',
        tempo: 'SLOW',
        date: 'DATE',
        message: 'ALL MAJESTY AND PRAISE',
        links:'NONE'
      },
      {
        title: '3PRAISE ALL THE EARTH',
        artist: 'S2G PROJECT',
        tempo: 'SLOW',
        date: 'DATE',
        message: 'ALL MAJESTY AND PRAISE',
        links:'NONE'
      },
      {
        title: '3HOLY GOD ALMIGHTY',
        artist: 'S2G PROJECT',
        tempo: 'SLOW',
        date: 'DATE',
        message: 'ALL MAJESTY AND PRAISE',
        links:'NONE'
      },
      {
        title: '3FIRE OF THE SPIRIT',
        artist: 'S2G PROJECT',
        tempo: 'SLOW',
        date: 'DATE',
        message: 'ALL MAJESTY AND PRAISE',
        links:'NONE'
      },
      {
        title: '3MY SALVATION THE LORD',
        artist: 'S2G PROJECT',
        tempo: 'SLOW',
        date: 'DATE',
        message: 'ALL MAJESTY AND PRAISE',
        links:'NONE'
      }
    ]
    return (
        <div>
        <form className='form-horizontal'>
            <div className='form-group'>
            <Link to ="/home">
              <a className="btn-img" >
                <img src={require('../common/backbtn.png') } width="60" height="70"/>
              </a>
              </Link>
              <header className="category-header">
                <p className='title'>PRAISE </p>
              </header>
            </div>
            <div className='table-div' >
            <Table striped className='table-rows'>
                  <thead>
                    <tr>
                      <th>TITLE </th>
                      <th>ARTIST </th>
                      <th>TEMPO</th>
                      <th>DATE</th>
                      <th>MESSAGE</th>
                      <th>LINKS</th>
                    </tr>
                  </thead>
                  <tbody>
                  {praiselist.map((song) => {
                    return (
                      <tr key={song.title}>
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{song.tempo}</td>
                        <td>{song.date}</td>
                        <td>{song.message}</td>
                        <td>{song.links}</td>
                      </tr>
                    )
                  }
                  )}
                  </tbody>
            </Table>
            </div>

            </form>
        </div>
    );
  }
}
