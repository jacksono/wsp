
import React from 'react';
import {Link, IndexLink} from 'react-router';
import { Table } from 'reactstrap';

export default class Search extends React.Component {
  render() {
    const songslist = [
      {
        title: 'ALL MAJESTY AND PRAISE',
        category: 'PRAISE',
        artist: 'S2G PROJECT',
        tempo: 'SLOW',
        date: 'DATE',
        message: 'ALL MAJESTY AND PRAISE',
        links:'NONE'
      },
      {
        title: 'PRAISE ALL THE EARTH',
        category: 'PRAISE',
        artist: 'S2G PROJECT',
        tempo: 'SLOW',
        date: 'DATE',
        message: 'ALL MAJESTY AND PRAISE',
        links:'NONE'
      },
      {
        title: 'HOLY GOD ALMIGHTY',
        category: 'PRAISE',
        artist: 'S2G PROJECT',
        tempo: 'SLOW',
        date: 'DATE',
        message: 'ALL MAJESTY AND PRAISE',
        links:'NONE'
      },
      {
        title: 'FIRE OF THE SPIRIT',
        category: 'PRAISE',
        artist: 'S2G PROJECT',
        tempo: 'SLOW',
        date: 'DATE',
        message: 'ALL MAJESTY AND PRAISE',
        links:'NONE'
      },
      {
        title: 'MY SALVATION THE LORD',
        category: 'PRAISE',
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
            <div className='form-group '>
            <div className='col-sm-5 admin-header'>
                <input  className='form-control admin-control'
                        name='search'
                        placeholder= 'S E A R C H'
                        type='text'
                />
            </div>
            <div className=' category col-sm-4'>
            <Link to ="/admin/new">
                <input className='btn-success form-control admin-btn-control'
                       name='praise'
                       type='button'
                       value='ADD NEW SONG'
                       onClick=''
                />
                </Link>
            </div>
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
                  {songslist.map((song) => {
                    return (
                      <tr key={song.title}>
                      <td>{song.title}</td>
                      <td>{song.category}</td>

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
