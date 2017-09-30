
import React from 'react';
import {Link, IndexLink} from 'react-router';
import { Table } from 'reactstrap';

export default class PraisePage extends React.Component {
  render() {
    return (
        <div>
        <form className='form-horizontal'>
            <div className='form-group'>
            <Link to ="/admin">
              <a className="btn-img" >
                <img src="https://www.dropbox.com/s/c0xnyvntn4xlxvv/backbtn.png?dl=1" alt="BACK" width="60" height="80"/>
              </a>
              </Link>
              <header className="category-header">
                <p className='title'>ADD A NEW SONG </p>
              </header>
            </div>

            <div className='table-div' >
              <div className='form-group'>
                <label className='control-label col-sm-2 admin-label'> TITLE: </label>
                <div className='col-sm-5'>
                    <input  className='form-control admin-input'
                            name='title'
                            type='text'
                    />
                </div>
              </div>

              <div className='form-group'>
                <label className='control-label col-sm-2 admin-label'> CATEGORY: </label>
                <div className='col-sm-5'>
                    <input  className='form-control admin-input'
                            name='category'
                            type='text'
                    />
                </div>
              </div>

              <div className='form-group'>
                <label className='control-label col-sm-2 admin-label'> ARTIST: </label>
                <div className='col-sm-5'>
                    <input  className='form-control admin-input'
                            name='artist'
                            type='text'
                    />
                </div>

                <div className='col-sm-3'>
                    <button type='submit'
                         name='update'
                         className='btn btn-success form-control'>
                         ADD DATE
                    </button>
                </div>
              </div>

              <div className='form-group'>
                <label className='control-label col-sm-2 admin-label'> TEMPO: </label>
                <div className='col-sm-5'>
                    <input  className='form-control admin-input'
                            name='tempo'
                            type='text'
                    />
                </div>

                <div className='col-sm-3'>
                    <button type='submit'
                         name='update'
                         className='btn btn-success form-control'>
                         ADD LINK
                    </button>
                </div>
              </div>

              <div className='form-group'>
                <label className='control-label col-sm-2 admin-label'> MESSAGE: </label>
                <div className='col-sm-5'>
                    <input  className='form-control admin-input'
                            name='message'
                            type='text'
                    />
                </div>
              </div>
            <div className='form-group'>
              <div className='col-sm-3'>
                  <button type='submit'
                       name='update'
                       className='btn btn-success form-control'>
                       Save
                  </button>
              </div>
              <div className='col-sm-3'>
                  <button type='button'
                       name='cancel'
                       className='btn btn-default form-control cancelBtn'>
                       Cancel
                  </button>
              </div>
          </div>
            </div>

        </form>
        </div>
    );
  }
}
