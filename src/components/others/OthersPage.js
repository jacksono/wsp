
import React from 'react';
import {Link, IndexLink} from 'react-router';
import { Table } from 'reactstrap';

export default class OthersPage extends React.Component {
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
    const otherslist = [
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
            <div className='form-group'>
            <Link to ="/home" className="btn-img" >
                <img src={require('../common/backbtn.png') } width="60" height="70"/>
            </Link>
              <header className="category-header">
                <p className='title'>OTHERS </p>
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
                      <th>CATEGORY </th>
                      <th>ARTIST </th>
                      <th>TEMPO</th>
                      <th>DATE</th>
                      <th>MESSAGE</th>
                      <th>LINKS</th>
                    </tr>
                  </thead>
                  <tbody>
                  {otherslist.map((song) => {
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
