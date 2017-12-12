
import React from 'react';
import {Link, IndexLink, withRouter} from 'react-router';
import { Table } from 'reactstrap';
import apiCall from '../apiHelper';

class LyricsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lyrics: '',
      title: ''
    };
  }

  componentWillMount(){
    if(this.props.params.lyrics !== ' '){
      this.setState({lyrics: this.props.params.lyrics.replace(/\n/g, "%%")})
    }
    else{
    apiCall(null, 'get', 'lyrics/'+this.props.params.song)
    .then((response) => {
        this.setState({lyrics:response.lyrics})
      }).catch(error => (error));
    }
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

            <div className='table-div' >
            <div className="lyrics">
            <p><strong><u> LYRICS FOR {this.props.params.song}</u></strong></p>
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
