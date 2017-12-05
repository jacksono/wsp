
import React from 'react';
import {Link, IndexLink} from 'react-router';
import { Table } from 'reactstrap';
import apiCall from '../apiHelper';
import toastr from 'toastr';
import { withRouter } from 'react-router'
import '../../../node_modules/toastr/build/toastr.css';

toastr.options = {
                "closeButton": true,
                "progressBar": true,
                "positionClass": "toast-top-left",
              }

class AddPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: this.props.params.category.replace(/\s+$/g,''),
      origin: '',
      tempo: '',
      message: '',
      language: '',
      comment: '',
      song: {}

    };
  this.handleChange = this.handleChange.bind(this);
  this.handleEdit = this.handleEdit.bind(this);
  this.handleSave = this.handleSave.bind(this);
  this.handleClear = this.handleClear.bind(this);
  }


  handleChange(event) {
    const { name, value } = event.target;
    event.preventDefault();
    this.setState({
      [name]: value,
    })
  }

  handleEdit(e){
    e.preventDefault()
  }
  handleSave(e){
    e.preventDefault()
    let editValues = {
      title: this.state.title.toUpperCase(),
      origin: this.state.origin.toUpperCase(),
      language: this.state.language.toUpperCase(),
      tempo: this.state.tempo.toUpperCase(),
      message: this.state.message.toUpperCase(),
      category: this.state.category.toUpperCase()
    }
    apiCall(editValues, 'post', 'add/')
    .then((response) => {
        toastr.success("Saved successfully")
      }).catch(error => (error));
    this.props.router.push("/details/"+editValues.title);
  }

  handleClear(e){
    e.preventDefault();
    this.setState({
      title: '',
      category: '',
      origin: '',
      tempo: '',
      message: '',
      language: '',
      comment: '',

    })
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
                <p className='title'>ADD SONG </p>
              </header>
            </div>

            <div className='table-div' >
              <div className='form-group'>
                <label className='control-label col-sm-2 admin-label'> TITLE: </label>
                <div className='col-sm-5'>
                    <input  className='form-control admin-input'
                            name='title'
                            type='text'
                            value={this.state.title}
                            onChange={this.handleChange}
                    />
                </div>
              </div>

              <div className='form-group'>
                <label className='control-label col-sm-2 admin-label'> CATEGORY: </label>
                <div className='col-sm-5'>
                    <select
                      className="form-control admin-input"
                      name="category"
                      value={this.state.category}
                      onChange={this.handleChange}
                      style={{ width: '365px' }}
                      disabled={this.props.params.category === ' ' ? false : true}
                    >
                      {
                        ["...", "PRAISE", "WORSHIP", "STG", "OTHER"].map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))
                      }
                    </select>
                </div>
              </div>

              <div className='form-group'>
                <label className='control-label col-sm-2 admin-label'> ORIGIN: </label>
                <div className='col-sm-5'>
                    <input  className='form-control admin-input'
                            name='origin'
                            type='text'
                            value={this.state.origin}
                            onChange={this.handleChange}
                    />
                </div>

                <div className='col-sm-3 btn-link'>
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

                    <select
                      className="form-control admin-input"
                      name="tempo"
                      value={this.state.tempo}
                      onChange={this.handleChange}
                      style={{ width: '365px' }}
                    >
                      {
                        ["...", "FAST", "SLOW"].map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))
                      }
                    </select>
                </div>

                <div className='col-sm-3 btn-link'>
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
                            value={this.state.message}
                            onChange={this.handleChange}
                    />
                </div>
              </div>
              <div className='form-group'>
                <label className='control-label col-sm-2 admin-label'> LANGUAGE: </label>
                <div className='col-sm-5'>
                    <select
                      className="form-control admin-input"
                      name="language"
                      value={this.state.language}
                      onChange={this.handleChange}
                      style={{ width: '365px' }}
                    >
                      {
                        ["...", "ENGLISH", "LUGANDA", "SWAHILI", "OTHER"].map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))
                      }
                    </select>
                </div>
              </div>

              <div className='form-group'>
                <label className='control-label col-sm-2 admin-label'> COMMENT: </label>
                <div className='col-sm-5'>
                    <input  className='form-control admin-input'
                            name='comment'
                            type='text'
                            value={this.state.comment}
                            onChange={this.handleChange}
                    />
                </div>
              </div>
            <div className='form-group btn-pos'>
              <div className='col-sm-2'>
                  <button
                       name='update'
                       onClick={this.handleSave}
                       className='btn btn-success form-control'>
                       Save
                  </button>
              </div>
              <div className='col-sm-2'>
                  <button type='button'
                       name='save'
                       onClick={this.handleClear}
                       className='btn btn-default form-control cancelBtn'>
                       Clear
                  </button>
              </div>

          </div>
            </div>

        </form>
        </div>
    );
  }
}

export default withRouter(AddPage)
