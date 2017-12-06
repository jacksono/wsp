
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

    };
    this.toggle = this.toggle.bind(this)
  }

  componentDidMount(){
    apiCall(null, 'get', 'songs/')
    .then((response) => {
      this.setState({songs: response})
      }).catch(error => (error));
    }
  toggle(){
    this.setState({toggleSearch: !this.state.toggleSearch,
      toggleResults: !this.state.toggleResults})
    }

  render() {
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
              <SearchForm toggle={this.toggle} />
            </Collapsible>

            <Collapsible open={this.state.toggleResults} trigger="SEARCH RESULTS" triggerOpenedClassName="CustomTriggerCSS--open" className="searchtable">
              <SearchTable songs={this.state.songs} toggle={this.toggle} />
            </Collapsible>

            </div>
            </form>
        </div>
    );
  }
}
export default withRouter(SearchPage)
