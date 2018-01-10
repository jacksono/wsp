
import React from 'react';
import {Link, IndexLink, withRouter} from 'react-router';

class CategoriesPage extends React.Component {
  render() {
    return (
        <div>
        <form className='form-horizontal'>
            <div className='form-group'>
            <Link to='' onClick={this.props.router.goBack} className="btn-img" >
                <img src={require('../common/backbtn.png') } width="60" height="70"/>
            </Link>


            <div className='form-group'>
              <div className=' category col-sm-5 move-cat'>
              <Link to ="/praise">
                  <input className='btn-home form-control'
                         name='praise'
                         type='button'
                         value='PRAISE'
                         onClick=''
                  />
                  </Link>
              </div>
            </div>

            <div className='form-group'>
              <div className=' category col-sm-5'>
              <Link to ="/worship">
                  <input className='btn-home form-control'
                         name='worship'
                         type='button'
                         value='WORSHIP'
                         onClick=''
                  />
                  </Link>
              </div>
            </div>

            <div className='form-group'>
              <div className=' category col-sm-5'>
              <Link to ="/others">
                  <input className='btn-home form-control'
                         name='other'
                         type='button'
                         value='OTHERS'
                         onClick=''
                  />
                  </Link>
              </div>
            </div>
            </div>
            </form>
        </div>
    );
  }
}
export default withRouter(CategoriesPage)
