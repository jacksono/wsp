
import React from 'react';
import {Link, IndexLink, withRouter} from 'react-router';
import { Table } from 'reactstrap';
import apiCall from '../apiHelper';

class LyricsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lyrics: '',
      title: '',
      category: ''
    };
  }

  componentWillMount(){
    if(this.props.params.lyrics !== ' '){
      this.setState({lyrics: this.props.params.lyrics.replace(/\n/g, "%%")})
    }
    else{
    apiCall(null, 'get', 'lyrics/'+this.props.params.song.split(',')[0])
    .then((response) => {
        this.setState({lyrics:response.lyrics})
      }).catch(error => (error));
    }
    this.setState({title: this.props.params.song.split(',')[0],
                  category: this.props.params.song.split(',')[1]})

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
                    value={"SONG LYRICS PAGE"}
                    disabled
            />
            </div>
            <div className='form-group lyrics-btn-group'>
              <div className='admin-header col-sm-3'>
                  <button  name='update'
                           onClick= {(e) => {
                             e.preventDefault();
                             this.props.router.push('/links/'+[this.state.title, this.state.category, true, true])
                           }}
                           className='btn btn-success form-control add'>
                       Edit the Lyrics
                  </button>
              </div>

              <div className='admin-header col-sm-3 audio'>

              </div>

              <div className='admin-header col-sm-3'>
                  <button
                       name='update'
                       onClick = { (e) => { e.preventDefault();
                         this.props.router.push('/' + this.state.category)}}
                       className='btn btn-primary form-control video'>
                       Back to Song List
                  </button>
              </div>
            </div>

            <div className='table-div' >
            <div className="lyrics">
            <div className='form-group'>
            <p>
              <strong>
                <Link to={'/details/'+this.state.category+"/"+this.state.title}>
                  <u className='lyric-title'>{this.state.title}</u>
                </Link>
              </strong>
            </p>
            </div>
            {this.state.lyrics.split("%%").map((line) =>
            <p>{line === "$$" ? <br/>: (line.includes("Chorus") || line.includes("Bridge") || line.includes("Verse") || line.includes("Climax")) ? <strong>{line}</strong> : line}</p>

          )}
          </div>
            </div>

        </form>
        </div>
    );
  }
}
export default withRouter(LyricsPage)
