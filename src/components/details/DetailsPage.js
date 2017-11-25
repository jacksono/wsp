
import React from 'react';
import {Link, IndexLink} from 'react-router';
import { Table } from 'reactstrap';
import apiCall from '../apiHelper';

export default class DetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: {}

    };

  }

  componentWillMount(){
    apiCall(null, 'get', 'songs/')
    .then((response) => {
      response.map((s) => {
        if(s.title === this.props.params.song){
          this.setState({song: s})
        }
      })
      }).catch(error => (error));
  }

  render() {
    console.log(this.props)
    return (
        <div>
        <form className='form-horizontal'>
            <div className='form-group'>
            <Link to ="/home" className="btn-img" >
                <img src={require('../common/backbtn.png') } width="60" height="70"/>
            </Link>
              <header className="category-header">
                <p className='title'>SONG DETAILS </p>
              </header>
            </div>

            <div className='table-div' >
              <div className='form-group'>
                <label className='control-label col-sm-2 admin-label'> TITLE: </label>
                <div className='col-sm-5'>
                    <input  className='form-control admin-input'
                            name='title'
                            type='text'
                            value={this.state.song.title}
                            disabled
                    />
                </div>
              </div>

              <div className='form-group'>
                <label className='control-label col-sm-2 admin-label'> CATEGORY: </label>
                <div className='col-sm-5'>
                    <input  className='form-control admin-input'
                            name='category'
                            type='text'
                            value={this.state.song.category}
                            disabled
                    />
                </div>
              </div>

              <div className='form-group'>
                <label className='control-label col-sm-2 admin-label'> ORIGIN: </label>
                <div className='col-sm-5'>
                    <input  className='form-control admin-input'
                            name='artist'
                            type='text'
                            value={this.state.song.origin}
                            disabled
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
                            value={this.state.song.tempo}
                            disabled
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
                            value={this.state.song.message}
                            disabled
                    />
                </div>
              </div>
              <div className='form-group'>
                <label className='control-label col-sm-2 admin-label'> LANGUAGE: </label>
                <div className='col-sm-5'>
                    <input  className='form-control admin-input'
                            name='message'
                            type='text'
                            value={this.state.song.language}
                            disabled
                    />
                </div>
              </div>
            <div className='form-group'>
              <div className='col-sm-3'>
                  <button type='submit'
                       name='update'
                       className='btn btn-success form-control'>
                       Edit
                  </button>
              </div>
              <div className='col-sm-3'>
                  <button type='button'
                       name='cancel'
                       className='btn btn-default form-control cancelBtn'>
                       Delete
                  </button>
              </div>
          </div>
            </div>

        </form>
        </div>
    );
  }
}
