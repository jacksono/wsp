
import React from 'react';
import {Link, IndexLink, withRouter} from 'react-router';
import Collapsible from 'react-collapsible';
import SearchForm from './SearchForm'
import SearchTable from './SearchTable'
import apiCall from '../apiHelper';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: {},
      toggleSearch: true,
      toggleResults: false,
      songs: [],
      searchedSongs: []

    };
    this.handleSearch = this.handleSearch.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
    this.toggleTable = this.toggleTable.bind(this)
  }

  componentDidMount(){
    apiCall(null, 'get', 'songs/')
    .then((response) => {
      this.setState({songs: response})
      }).catch(error => (error));
    }
  handleSearch(object){
      let songData = []
    console.log("from page", object)
    this.state.songs.map((song) => {
      if(song.title.includes(object.title.toUpperCase()) &&
      song.origin.includes(object.origin.toUpperCase()) &&
      song.message.includes(object.message.toUpperCase()) &&
      song.category.includes(object.category.toUpperCase()) &&
      song.language.includes(object.language.toUpperCase()) &&
      song.tempo.includes(object.tempo.toUpperCase())){
      songData.push(song)
      }
    })
    this.setState({searchedSongs: songData})
    }

    toggleForm(){
      this.setState({toggleSearch: false,
        toggleResults: true})
      }
    toggleTable(){
      this.setState({toggleSearch: true,
        toggleResults: false})
      }

  render() {
    console.log("songs", this.state)
    return (
        <div>
        <form className='form-horizontal'>
            <div className='form-group'>
            <Link to='' onClick={this.props.router.goBack} className="btn-img" >
                <img src={require('../common/backbtn.png') } width="60" height="70"/>
            </Link>
            <input  className='category-header title'
                    name='title'
                    type='text'
                    value={"SEARCH PAGE"}
                    disabled
            />

            <Collapsible open={this.state.toggleSearch} trigger="SEARCH CRITERIA" triggerOpenedClassName="CustomTriggerCSS--open">
              <SearchForm searched={this.handleSearch} toggle={this.toggleForm} />
            </Collapsible>

            <Collapsible open={this.state.toggleResults} trigger="SEARCH RESULTS" triggerOpenedClassName="CustomTriggerCSS--open" className="searchtable">
              <SearchTable songs={this.state.searchedSongs?this.state.searchedSongs:this.state.songs} toggle={this.toggleTable} />
            </Collapsible>

            </div>
            </form>
        </div>
    );
  }
}
export default withRouter(SearchPage)
