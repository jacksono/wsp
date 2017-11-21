
import React from 'react';
import {Link, IndexLink} from 'react-router';

export default class HomePage extends React.Component {
  render() {
    return (
        <div>
        <form className='form-horizontal'>
            <div className='form-group'>
              <div className='btn-right'>
                  <input className='btn-search btn-success form-control'
                         name='search'
                         type='button'
                         value='SEARCH'
                         onClick=''
                  />
              </div>
            </div>

            <div className='form-group'>
              <div className=' category col-sm-5'>
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
              <Link to ="/s2g">
                  <input className='btn-home form-control'
                         name='s2g'
                         type='button'
                         value='SONGS TO GLORY'
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
            </form>
        </div>
    );
  }
}
