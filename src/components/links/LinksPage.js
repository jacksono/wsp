
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
      title: '',
      hasLyrics: false,
      category: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleLyricsLink = this.handleLyricsLink.bind(this);
  }

  componentDidMount(){
    this.setState({
      title: this.props.params.song.split(',')[0],
      hasLyrics: this.props.params.song.split(',')[2],
      category: this.props.params.song.split(',')[1]
    })
    if(this.props.params.song.split(',').length === 4){
      this.setState({clicked: true})
      apiCall(null, 'get', 'lyrics/' + this.props.params.song.split(',')[0])
      .then((response) => {
          let lyrc = response.lyrics.replace(/%%/g, "\n")
          let finl = ''
          lyrc.split("$$").map(line => {
            finl += line
          })
          this.setState({ lyrics: finl})
        }).catch(error => (error));
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  }

  handleSave(e){
    e.preventDefault()
    let payload = { lyrics:this.state.lyrics.replace(/\n/g, "%%") }
    if(this.state.hasLyrics !== "true"){
      apiCall(payload, 'post', 'lyrics/'+this.state.title)
      toastr.success("Lyrics Saved Successfully")
      apiCall({title: this.state.title, lyrics: "True"}, 'put', this.state.category + '/' + this.state.title)
      .then((response) => {
          toastr.success("Lyrics link generated")
        })
    }
    else{
      apiCall(payload, 'put', 'lyrics/'+this.state.title)
      toastr.success("Lyrics Updated Successfully")
    }
    this.props.router.push('/lyrics/'+[this.state.title,this.state.category]+"/"+this.state.lyrics);
  }

  handleLyricsLink(e){
    e.preventDefault();
    if(this.state.hasLyrics === "true"){
      apiCall(null, 'get', 'lyrics/' + this.state.title)
      .then((response) => {
          let lyrc = response.lyrics.replace(/%%/g, "\n")
          let finl = ''
          lyrc.split("$$").map(line => {
            finl += line
          })
          this.setState({ lyrics: finl})
        }).catch(error => (error));
    }
    this.setState({clicked: true })
  }

  render() {
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
                           onClick= {this.handleLyricsLink}
                           className='btn btn-default form-control add'>
                       {this.state.hasLyrics === "true" ? "EDIT LYRICS" : "ADD LYRICS"}
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
              <p className='lyrics-head'>Lyrics for {this.state.title} </p>
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
