'use strict';
import React from 'react';
import {Link, IndexLink, withRouter} from 'react-router';
import { Table } from 'reactstrap';
import apiCall from '../apiHelper';

class S2gPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      songs: []

    };

    this.search = this.search.bind(this);
  }

  componentDidMount(){
    apiCall(null, 'get', 'stg/')
    .then((response) => {
      this.setState({songs: response})
      }).catch(error => (error));
  }

  search(event) {
    const { name, value } = event.target;
    event.preventDefault();
    this.setState({
      [name]: value,
    })
  }
  render() {
    return (
        <div>
        <form className='form-horizontal'>
            <div className='form-group'>
            <Link to ='' onClick={this.props.router.goBack} className="btn-img" >
                <img src={require('../common/backbtn.png') } width="60" height="70"/>
              </Link>
              <input  className='category-header title'
                      name='title'
                      type='text'
                      value={"SONGS TO GLORY"}
                      disabled
              />

              <div className='col-sm-5 cat-search admin-header'>
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
                      <th> # </th>
                      <th>TITLE </th>
                      <th>TEMPO</th>
                      <th>ALBUM</th>
                      <th>LINKS</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.state.songs.map((song) => {
                    if (!this.state.searchValue){
                      return (
                        <tr key={song.title}>
                          <td>{song.id}</td>
                          <td>{song.title}</td>
                          <td className="">{song.tempo}</td>
                          <td>{song.message}</td>
                          <td className=""><Link to={"/lyrics/"+song.title}>{"Lyrics"}</Link></td>
                        </tr>
                      )
                  } else {
                    if(song.title.includes(this.state.searchValue.toUpperCase()) || song.origin.includes(this.state.searchValue.toUpperCase()) || song.album.includes(this.state.searchValue.toUpperCase()) || song.tempo.includes(this.state.searchValue.toUpperCase())){
                      return (
                        <tr key={song.title}>
                          <td>{song.id}</td>
                          <td>{song.title}</td>
                          <td className="">{song.tempo}</td>
                          <td>{song.album}</td>
                          <td className=""><Link to={"/lyrics/"+song.title}>{"Lyrics"}</Link></td>
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
export default withRouter(S2gPage)
