
import React from 'react';
import {Link, IndexLink, withRouter} from 'react-router';
import { Table } from 'reactstrap';
import apiCall from '../apiHelper';
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import SearchTable from '../search/SearchTable'


class PraisePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      songs: [],
      searchedSongs: []
    };

    this.search = this.search.bind(this);
  }

  componentDidMount(){
    apiCall(null, 'get', 'praise/')
    .then((response) => {
      this.setState({songs: response})
      }).catch(error => (error));
  }

  search(event) {
    const { name, value } = event.target;
    let songsSearched = []
    event.preventDefault();
    this.setState({
      [name]: value,
    })
    this.state.songs.map((song) => {
      if(song.title.includes(this.state.searchValue.toUpperCase()) ||
      song.origin.includes(this.state.searchValue.toUpperCase()) ||
      song.message.includes(this.state.searchValue.toUpperCase()) ||
      song.tempo.includes(this.state.searchValue.toUpperCase())){
        songsSearched.push(song)
      }
    })
    this.setState({searchedSongs : songsSearched})
  }

  render() {
    return (
        <div>
        <form className='form-horizontal'>
            <div className='form-group'>
            <Link  to='' onClick={this.props.router.goBack} className="btn-img" >
                <img src={require('../common/backbtn.png') } width="60" height="70"/>
              </Link>
              <input  className='category-header title'
                      name='title'
                      type='text'
                      value={"PRAISE SONG LIST"}
                      disabled
              />
              <div className='form-group'>
              <div className='admin-header col-sm-3'>
                  <button type=''
                       name='update'
                       onClick= {(e)=>{
                         e.preventDefault()
                         this.props.router.push('/add/PRAISE')}}
                       className='btn btn-default form-control add'>
                       ADD A NEW PRAISE SONG
                  </button>
              </div>

              <div className='admin-header col-sm-3'>
                  <button type=''
                       name='update'
                       onClick= {(e)=>{
                         e.preventDefault()
                         this.props.router.push('/categories')}}
                       className='btn btn-default form-control'>
                       OTHER CATEGORIES
                  </button>
              </div>

              <div className='col-sm-3 admin-header'>
              <input  className='form-control cat-search'
                      name='searchValue'
                      placeholder= 'S E A R C H'
                      type='text'
                      value = {this.state.searchValue}
                      onChange = {this.search}
              />
              </div>
              </div>
              </div>


            <div className='table-div' >
            <SearchTable songs={this.state.searchValue? this.state.searchedSongs : this.state.songs} category="PRAISE"/>

            </div>

            </form>
        </div>
    );
  }
}
export default withRouter(PraisePage)
