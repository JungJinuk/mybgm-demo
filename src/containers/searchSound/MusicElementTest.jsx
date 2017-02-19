import React, { Component, PropTypes } from 'react';
import WaveController from '../../components/bestSellerBoard/WaveController';
import { Link } from 'react-router';

//munjo test css
import Margin from './margin.css'


class MusicElementTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false
    };

    this.handleTogglePlay = this.handleTogglePlay.bind(this);
  }

  handleTogglePlay() {
    this.setState({
      playing: !this.state.playing
    });
  }

  render() {
    var MusicElement = this.props.music.Music;

    return (
      <div className="row margin">
        <div className="col-md-4">
          <Link to="/sound/detail">
            <img className="cover" src={MusicElement.Image} />
          </Link>
        </div>
        <ul className="col-md-4">
          <li className="BestSeller">
            <img className="play" src={!this.state.playing ? "/data/images/etc/play-button.png" : "/data/images/etc/pause-button.png"}
              onClick={this.handleTogglePlay} />
            <div className="detail"><p className="musictitlefont"><b>{MusicElement.Title}</b></p>
              <p className="musicfont">{this.props.music.Artist.Name}</p></div>
            <WaveController song={MusicElement.Song} playing={this.state.playing} />
          </li>
        </ul>
        <div className="col-md-4 etcarrange">
          <p>{MusicElement.Price}{"Won"}<span className="glyphicon glyphicon-heart">{MusicElement.Likes}</span></p>
        </div>
      </div>
    );
  }
}

MusicElement.propTypes = {
  music: PropTypes.object
};

export default MusicElementTest;
