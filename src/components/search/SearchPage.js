
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
      songs: [],

    };

  }

  componentDidMount(){
    apiCall(null, 'get', 'songs/')
    .then((response) => {
      this.setState({songs: response})
      }).catch(error => (error));
  }
  render() {
    return (
        <div>
        <form className='form-horizontal'>
            <div className='form-group'>
            <Link to='' onClick={this.props.router.goBack} className="btn-img" >
                <img src={require('../common/backbtn.png') } width="60" height="70"/>
            </Link>
            <header className="category-header">
              <p className='title'>SEARCH </p>
            </header>

            <Collapsible open={true} trigger="SEARCH CRITERIA" triggerOpenedClassName="CustomTriggerCSS--open">
              < SearchForm />
            </Collapsible>

            <Collapsible open={true} trigger="SEARCH RESULTS" triggerOpenedClassName="CustomTriggerCSS--open" className="searchtable">
              <SearchTable songs={this.state.songs} />
            </Collapsible>

            </div>
            </form>
        </div>
    );
  }
}
export default withRouter(SearchPage)
