
import React from 'react';


export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      origin: '',
      tempo: '',
      message: '',
      language: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    event.preventDefault();
    this.setState({
      [name]: value,
    })
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
  handleSearch(e){
    e.preventDefault();
    this.props.toggle()
  }

  render() {
    return (
      <div>
        <form className='form-horizontal srch-form'>
        <div className='form-group'>
          <label className='control-label col-sm-2 admin-label'> TITLE: </label>
          <div className='col-sm-3'>
              <input  className='form-control admin-input'
                      name='title'
                      type='text'
                      onChange={this.handleChange}
                      value={this.state.title}
              />
          </div>

          <label className='control-label col-sm-3 admin-label'> CATEGORY: </label>
          <div className='col-sm-3'>
              <select
                className="form-control admin-input"
                name="category"
                value={this.state.category}
                onChange={this.handleChange}
                style={{ width: '200px' }}
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
          <div className='col-sm-3'>
              <input  className='form-control admin-input'
                      name='origin'
                      type='text'
                      onChange={this.handleChange}
                      value={this.state.origin}
              />
          </div>

          <label className='control-label col-sm-3 admin-label'> LANGUAGE: </label>
          <div className='col-sm-3'>
              <select
                className="form-control admin-input"
                name="language"
                value={this.state.language}
                onChange={this.handleChange}
                style={{ width: '200px' }}
              >
                {
                  ["...", "ENG", "LUG", "SWA", "OTHER"].map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))
                }
              </select>
          </div>
        </div>

        <div className='form-group'>
          <label className='control-label col-sm-2 admin-label'> MESSAGE: </label>
          <div className='col-sm-3'>
              <input  className='form-control admin-input'
                      name='message'
                      type='text'
                      onChange={this.handleChange}
                      value={this.state.message}
              />
          </div>

          <label className='control-label col-sm-3 admin-label'> TEMPO: </label>
          <div className='col-sm-3'>
              <select
                className="form-control admin-input"
                name="tempo"
                value={this.state.tempo}
                onChange={this.handleChange}
                style={{ width: '200px' }}
              >
                {
                  ["...", "FAST", "SLOW"].map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))
                }
              </select>
          </div>
        </div>

        <div className='form-group srch-btn-pos'>
          <div className='col-sm-3'>
              <button
                   name='update'
                   onClick={this.handleSearch}
                   className='btn btn-success form-control'>
                   Search
              </button>
          </div>
          <div className='col-sm-3'>
              <button type='button'
                   name='clear'
                   onClick={this.handleClear}
                   className='btn btn-default form-control'>
                   Clear
              </button>
          </div>

      </div>

        </form>
      </div>

    )}
    }
