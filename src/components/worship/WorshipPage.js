

import React from 'react';
import {Link, IndexLink} from 'react-router';
import { Table } from 'reactstrap';

export default class WorshipPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',

    };

    this.search = this.search.bind(this);
  }

  search(event) {
    const { name, value } = event.target;
    event.preventDefault();
    this.setState({
      [name]: value,
    })
  }
  render() {
    const worshiplist = [
      {
        title: 'ALL MAJESTY AND PRAISE',
        artist: 'S2G PROJECT',
        tempo: 'SLOW',
        date: 'DATE',
        message: 'ALL MAJESTY AND PRAISE',
        links:'NONE'
      },
      {
        title: 'PRAISE ALL THE EARTH',
        artist: 'S2G PROJECT',
        tempo: 'SLOW',
        date: 'DATE',
        message: 'ALL MAJESTY AND PRAISE',
        links:'NONE'
      },
      {
        title: 'HOLY GOD ALMIGHTY',
        artist: 'S2G PROJECT',
        tempo: 'SLOW',
        date: 'DATE',
        message: 'ALL MAJESTY AND PRAISE',
        links:'NONE'
      },
      {
        title: 'FIRE OF THE SPIRIT',
        artist: 'S2G PROJECT',
        tempo: 'SLOW',
        date: 'DATE',
        message: 'ALL MAJESTY AND PRAISE',
        links:'NONE'
      },
      {
        title: 'MY SALVATION THE LORD',
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
                <p className='title'>WORSHIP </p>
              </header>

              <div className='col-sm-5 admin-header'>
                  <input  className='form-control cat-search'
                          name='searchValue'
                          placeholder= 'S E A R C H'
                          type='text'
                          value = {this.state.searchValue}
                          onChange = {this.search}
                  />
              </div>

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
                  {worshiplist.map((song) => {
                    if (!this.state.searchValue){
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
                  } else {
                    if(song.title.includes(this.state.searchValue.toUpperCase()) || song.artist.includes(this.state.searchValue.toUpperCase()) || song.message.includes(this.state.searchValue.toUpperCase()) || song.tempo.includes(this.state.searchValue.toUpperCase())){
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

                  }
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
