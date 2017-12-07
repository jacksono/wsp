
import React from 'react';
import {Link, IndexLink, withRouter} from 'react-router';
import { Table } from 'reactstrap';
import apiCall from '../apiHelper';
import toastr from 'toastr';
import '../../../node_modules/toastr/build/toastr.css';

toastr.options = {
                "closeButton": true,
                "progressBar": true,
                "positionClass": "toast-top-left",
              }

class DetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      origin: '',
      tempo: '',
      message: '',
      language: '',
      comment: '',
      created: '',
      updated: '',
      editable: false,
      song: {}

    };
  this.handleChange = this.handleChange.bind(this);
  this.handleEdit = this.handleEdit.bind(this);
  this.handleSave = this.handleSave.bind(this);
  this.handleCancel = this.handleCancel.bind(this);
  this.fetchSongDetails = this.fetchSongDetails.bind(this);
  }

  componentWillMount(){
    this.fetchSongDetails()
  }

  fetchSongDetails(){
    apiCall(null, 'get', 'song/'+this.props.params.category + '/' + this.props.params.song)
    .then((s) => {
          this.setState({song: s,
                        title: s.title,
                        category: s.category,
                        origin: s.origin,
                        message: s.message,
                        language: s.language,
                        tempo: s.tempo,
                        created: s.created,
                        updated: s.updated
                        })
      }).catch(error => (error));
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
    this.setState({editable: true})
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
    apiCall(editValues, 'put', editValues.category + '/' + this.props.params.song)
    .then((response) => {
        toastr.success("Changes Saved Successfully")
        this.setState({updated: response.updated})
      }).catch(error => (error));
    this.setState({editable: false})
  }
  handleCancel(e){
    e.preventDefault();
    this.fetchSongDetails();
    this.setState({editable: false})

  }
  render() {
    return (
        <div>
        <form className='form-horizontal'>
            <div className='form-group'>
            <Link to='' onClick={this.props.router.goBack} className="btn-img" >
                <img src={require('../common/backbtn.png') } width="60" height="70"/>
            </Link>
              <input  className='category-header title'
                      name='title'
                      type='text'
                      value={"SONG DETAILS"}
                      disabled
              />
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
                            disabled={!this.state.editable}
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
                      disabled={!this.state.editable}
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
                            disabled={!this.state.editable}
                    />
                </div>

                <div className='col-sm-3 btn-link'>
                    <button type='submit'
                         name='update'
                         className='btn btn-success form-control'
                         onClick = {(e) => {
                           e.preventDefault()
                           toastr.info("This action is not yet active ")
                         }}>
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
                      disabled={!this.state.editable}
                    >
                      {
                        ["...", "FAST", "SLOW"].map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))
                      }
                    </select>
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
                            disabled={!this.state.editable}
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
                      disabled={!this.state.editable}
                    >
                      {
                        ["...", "ENG", "LUG", "SWA", "OTHER"].map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))
                      }
                    </select>
                </div>

                <div className='col-sm-3 btn-link'>
                    <button type='submit'
                         name='update'
                         className='btn btn-success form-control'
                         onClick = {(e) => {
                           e.preventDefault()
                           toastr.info("This action is not yet active ")
                         }}>
                         ADD LINK
                    </button>
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
                            disabled={!this.state.editable}
                    />
                </div>
              </div>

              <div className='form-group'>
                <label className='control-label col-sm-2 admin-label'> ADDED: </label>
                <div className='col-sm-5'>
                    <input  className='form-control admin-input'
                            name='comment'
                            type='text'
                            value={this.state.created.slice(0,16)}
                            disabled
                    />
                </div>
              </div>
              {this.state.updated &&
              <div className='form-group'>
                <label className='control-label col-sm-2 admin-label'> UPDATED:</label>
                <div className='col-sm-5'>
                    <input  className='form-control admin-input'
                            name='comment'
                            type='text'
                            value={this.state.updated.slice(0,16)}
                            disabled
                    />
                </div>
              </div>
            }


            <div className='form-group btn-pos'>
            {!this.state.editable &&
              <div>
              <div className='col-sm-3'>
                  <button
                       name='update'
                       onClick={this.handleEdit}
                       className='btn btn-success form-control'>
                       Edit This Song
                  </button>

              </div>
              <div className='col-sm-3'>
                  <button
                       name='update'
                       onClick={(e)=>{
                         e.preventDefault()
                         this.props.router.push('/add/ ')}}
                       className='btn btn-success form-control'>
                       Add A New Song
                  </button>

              </div>
              </div>

            }
              {this.state.editable &&
                <div>
              <div className='col-sm-3'>
                  <button type='button'
                       name='save'
                       onClick={this.handleSave}
                       className='btn btn-success form-control cancelBtn'>
                       Save Changes
                  </button>
              </div>
              <div className='col-sm-2'>
                  <button type='button'
                       name='save'
                       onClick={this.handleCancel}
                       className='btn btn-default form-control cancelBtn'>
                       Cancel
                  </button>
              </div>
              </div>
            }
          </div>
            </div>

        </form>
        </div>
    );
  }
}
export default withRouter(DetailsPage)
