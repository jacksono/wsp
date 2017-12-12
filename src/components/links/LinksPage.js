
import React from 'react';
import {Link, IndexLink, withRouter} from 'react-router';
import apiCall from '../apiHelper';
import toastr from 'toastr';


class LinksPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lyrics: '',
      clicked: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  }

  handleSave(e){
    e.preventDefault()
    this.props.router.push('/lyrics/'+this.props.params.song+"/"+this.state.lyrics);
    toastr.success("Lyrics Saved Successfully")
  }

  render() {
    console.log(this.state.lyrics.replace(/\n/g, "%%"))
    return (
        <div>
        <form className='form-horizontal'>
          <div className='form-group'>
            <Link  to='' onClick={this.props.router.goBack} className="btn-img" >
                <img src={require('../common/backbtn.png') } width="60" height="70"/>
              </Link>
              <input  className='category-header title'
                      name='title'
                      type='text'
                      value={"LINKS PAGE"}
                      disabled
              />
            <div className=''>
            {!this.state.clicked &&
            <div className='form-group '>
              <div className='admin-header col-sm-3'>
                  <button  name='update'
                           onClick= {() => {this.setState({clicked: true})}}
                           className='btn btn-default form-control add'>
                       ADD LYRICS
                  </button>
              </div>

              <div className='admin-header col-sm-3'>
                  <button
                       name='update'
                       onClick = {(e) => {
                         e.preventDefault()
                         toastr.info("This action is not yet active ")
                       }}
                       className='btn btn-default form-control audio'>
                       ADD AUDIO
                  </button>
              </div>

              <div className='admin-header col-sm-3'>
                  <button
                       name='update'
                       onClick = {(e) => {
                         e.preventDefault()
                         toastr.info("This action is not yet active ")
                       }}
                       className='btn btn-default form-control video'>
                       ADD VIDEO
                  </button>
              </div>
            </div>
            }
            </div>
            {this.state.clicked &&
            <div className='form-group lyrics-btn-group'>
              <div className='admin-header col-sm-3'>
                  <button  name='update'
                           onClick= {this.handleSave}
                           className='btn btn-success form-control add'>
                       Save the Lyrics
                  </button>
              </div>

              <div className='admin-header col-sm-3 audio'>

              </div>

              <div className='admin-header col-sm-3'>
                  <button
                       name='update'
                       onClick = {() => {this.setState({clicked: false, lyrics: ''})}}
                       className='btn btn-danger form-control video'>
                       Cancel
                  </button>
              </div>
            </div>
            }
          </div>
          {this.state.clicked &&
              <div className=' forn-group table-div'>
              <div>
              <p className='lyrics-head'>Lyrics for {this.props.params.song} </p>
              <textarea value={this.state.lyrics}
                        name='lyrics'
                        placeholder="Start typing here"
                        rows='20'
                        cols='80'
                        onChange={this.handleChange}
                        />

              <div className='admin-header col-sm-3'>
                  <button
                       name='update'
                       onClick={() => {this.setState({lyrics: ''})}}
                       disabled={!this.state.lyrics}
                       className='btn btn-default form-control audio'>
                       Clear the lyrics written
                  </button>
              </div>

              </div>

              </div>
            }
            </form>
        </div>
    );
  }
}
export default withRouter(LinksPage)
