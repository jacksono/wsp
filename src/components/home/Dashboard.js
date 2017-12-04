
import React from 'react';
import {Link, IndexLink} from 'react-router';

export default class Dashboard extends React.Component {
  render() {
    return (
        <div>
        <form className='form-horizontal'>

            <div className='form-group'>
              <div className=' category col-sm-5'>
              <Link to ="/">
                  <input className='btn-home form-control'
                         name='praise'
                         type='button'
                         value='SEARCH FOR ANY SONG'
                         onClick=''
                  />
                  </Link>
              </div>
            </div>

            <div className='form-group'>
              <div className=' category col-sm-5'>
              <Link to ="/categories">
                  <input className='btn-home form-control'
                         name='praise'
                         type='button'
                         value='SONG CATEGORIES'
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
                         value='A.O.B'
                         onClick=''
                  />
                  </Link>
              </div>
            </div>
            </form>
        </div>
    );
  }
}
