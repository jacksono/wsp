
import React from 'react';
import {Link, IndexLink, withRouter} from 'react-router';
import Collapsible from 'react-collapsible';
import SearchForm from './SearchForm'

class SearchPage extends React.Component {
  render() {
    return (
        <div>
        <form className='form-horizontal'>
            <div className='form-group'>
            <Link to='' onClick={this.props.router.goBack} className="btn-img" >
                <img src={require('../common/backbtn.png') } width="60" height="70"/>
            </Link>


            <Collapsible open={true} trigger="SEARCH CRITERIA" triggerOpenedClassName="CustomTriggerCSS--open">
              < SearchForm />
            </Collapsible>

            </div>
            </form>
        </div>
    );
  }
}
export default withRouter(SearchPage)
