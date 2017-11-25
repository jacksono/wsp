
import React from 'react';
import {Link, IndexLink} from 'react-router';
import { Table } from 'reactstrap';
import apiCall from '../apiHelper';

export default class LyricsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lyrics: '',
      title: ''
    };
  }

  componentWillMount(){
    apiCall(null, 'get', 'lyrics/'+this.props.params.song)
    .then((response) => {
        this.setState({lyrics:response.lyrics})
      }).catch(error => (error));
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
                <p className='title'>SONG LYRICS </p>
              </header>
            </div>

            <div className='table-div' >
            <div className="lyrics">
            <p><strong><u> LYRICS FOR {this.props.params.song}</u></strong></p>
            {this.state.lyrics.split("%%").map((line) =>
            <p>{line === "$$" ? <br/>: (line.includes("Chorus") || line.includes("Bridge") || line.includes("Verse")) ? <strong>{line}</strong> : line}</p>

          )}
          </div>
            </div>

        </form>
        </div>
    );
  }
}