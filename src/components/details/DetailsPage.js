
import React from 'react';
import {Link, IndexLink, withRouter} from 'react-router';
import { Table } from 'reactstrap';
import apiCall from '../apiHelper';

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
    apiCall(null, 'get', 'songs/')
    .then((response) => {
      response.map((s) => {
        if(s.title === this.props.params.song){
          this.setState({song: s,
                        title: s.title,
                        category: s.category,
                        origin: s.origin,
                        message: s.message,
                        language: s.language,
                        tempo: s.tempo
                        })
        }
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
    apiCall(editValues, 'put', this.props.params.song)
    .then((response) => {
        console.log("result", response.msg)
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
                      disabled={!this.state.editable}
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
                            disabled={!this.state.editable}
                    />
                </div>
              </div>
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
