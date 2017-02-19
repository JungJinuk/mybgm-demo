import React, { Component, PropTypes } from 'react';
import WaveController from '../../components/bestSellerBoard/WaveController';
import { Link } from 'react-router';

//munjo test css
// import Align from './align.css'


class MusicElement extends Component {
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
      <div className="row">
        <div className="col-md-4">
          <Link to="/sound/detail">
            <img className="cover" src={MusicElement.Image} />
          </Link>
        </div>
        <ul>
          <li className="BestSeller">
            <img className="play" src={!this.state.playing ? "/data/images/etc/play-button.png" : "/data/images/etc/pause-button.png"}
              onClick={this.handleTogglePlay} />
            <div className="detail"><p><b>{MusicElement.Title}</b></p>
              <p>{this.props.music.Artist.Name}</p></div>
            <WaveController song={MusicElement.Song} playing={this.state.playing} />
            <div>
              <p>{MusicElement.Price}{"Won"}<span className="glyphicon glyphicon-heart">{MusicElement.Likes}</span></p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

MusicElement.propTypes = {
  music: PropTypes.object
};

export default MusicElement;
