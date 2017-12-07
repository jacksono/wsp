
import React from 'react';
import {Link, IndexLink} from 'react-router';
import toastr from 'toastr';

export default class Dashboard extends React.Component {
  render() {
    return (
        <div>
        <form className='form-horizontal'>

            <div className='form-group'>
              <div className=' category col-sm-5'>
              <Link to ="/search">
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
                         value='GO TO CATEGORIES'
                  />
                  </Link>
              </div>
            </div>

            <div className='form-group'>
              <div className=' category col-sm-5'>
              <Link to ="/add/ ">
                  <input className='btn-home form-control'
                         name='praise'
                         type='button'
                         value='ADD A NEW SONG'
                         onClick=''
                  />
                  </Link>
              </div>
            </div>

            <div className='form-group'>
              <div className=' category col-sm-5'>
              <Link to ="/">
                  <input className='btn-home form-control'
                         name='other'
                         type='button'
                         value='A.O.B'
                         onClick={() => { toastr.info("This button is not yet active")}}
                  />
                  </Link>
              </div>
            </div>
            </form>
        </div>
    );
  }
}
