
import React from 'react';
import {Link, IndexLink} from 'react-router';

export default class HomePage extends React.Component {
  render() {
    return (
        <div>
        <form className='form-horizontal'>
            <div className='form-group'>
              <div className='btn-right'>
                  <input className='btn btn-success form-control'
                         name='edit'
                         type='button'
                         value='S E A R C H'
                         onClick=''
                  />
              </div>
            </div>

            <div className='form-group'>
              <div className=' category col-sm-3'>
                  <input className='btn form-control'
                         name='edit'
                         type='button'
                         value='P R A I S E'
                         onClick=''
                  />
              </div>
            </div>

            <div className='form-group'>
              <div className=' category col-sm-3'>
                  <input className='btn form-control'
                         name='edit'
                         type='button'
                         value='W O R S H I P'
                         onClick=''
                  />
              </div>
            </div>

            <div className='form-group'>
              <div className=' category col-sm-3'>
                  <input className='btn form-control'
                         name='edit'
                         type='button'
                         value='O T H E R'
                         onClick=''
                  />
              </div>
            </div>
            </form>
        </div>
    );
  }
}
