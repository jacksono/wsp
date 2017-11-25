
import React from 'react';
import {Link, IndexLink} from 'react-router';
import { Table } from 'reactstrap';
import apiCall from '../apiHelper';

export default class DetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      origin: '',
      tempo: '',
      message: '',
      language: '',
      editable: false,
      song: {}

    };
  this.handleChange = this.handleChange.bind(this);
  this.handleEdit = this.handleEdit.bind(this);
  this.handleSave = this.handleSave.bind(this);
  }

  componentWillMount(){
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
      title: this.state.title,
      origin: this.state.origin,
      language: this.state.language,
      tempo: this.state.tempo,
      message: this.state.message,
      category: this.state.category
    }
    apiCall(editValues, 'put', this.props.params.song)
    .then((response) => {
        console.log("result", response.msg)
      }).catch(error => (error));
    this.setState({editable: false})
  }

  render() {
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
                            value={this.state.title}
                            onChange={this.handleChange}
                            disabled={!this.state.editable}
                    />
                </div>
              </div>

              <div className='form-group'>
                <label className='control-label col-sm-2 admin-label'> CATEGORY: </label>
                <div className='col-sm-5'>
                    <input  className='form-control admin-input'
                            name='category'
                            type='text'
                            value={this.state.category}
                            onChange={this.handleChange}
                            disabled={!this.state.editable}
                    />
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
                            value={this.state.tempo}
                            onChange={this.handleChange}
                            disabled={!this.state.editable}
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
                            value={this.state.message}
                            onChange={this.handleChange}
                            disabled={!this.state.editable}
                    />
                </div>
              </div>
              <div className='form-group'>
                <label className='control-label col-sm-2 admin-label'> LANGUAGE: </label>
                <div className='col-sm-5'>
                    <input  className='form-control admin-input'
                            name='language'
                            type='text'
                            value={this.state.language}
                            onChange={this.handleChange}
                            disabled={!this.state.editable}
                    />
                </div>
              </div>
            <div className='form-group'>
            {!this.state.editable &&
              <div className='col-sm-3'>
                  <button
                       name='update'
                       onClick={this.handleEdit}
                       className='btn btn-success form-control'>
                       Edit
                  </button>
              </div>
            }
              {this.state.editable &&
              <div className='col-sm-3'>
                  <button type='button'
                       name='save'
                       onClick={this.handleSave}
                       className='btn btn-default form-control cancelBtn'>
                       Save
                  </button>
              </div>
            }
          </div>
            </div>

        </form>
        </div>
    );
  }
}
