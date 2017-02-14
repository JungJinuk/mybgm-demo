import React, { Component, PropTypes } from 'react';
import WaveController from '../../components/bestSellerBoard/WaveController';


class MusicElement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false
    }

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
      <li className="BestSeller">
        <img className="play" src={!this.state.playing ? "/data/images/etc/play-button.png" : "/data/images/etc/pause-button.png"}
          onClick={this.handleTogglePlay} />
        <img className="cover" src={MusicElement.Image} />
        <div className="detail"><p><b>{MusicElement.Title}</b></p>
          <p>{this.props.music.Artist.Name}</p></div>
        <WaveController song={MusicElement.Song} playing={this.state.playing} />
        <div>
          <p>{MusicElement.Price}{"Won"}<span className="glyphicon glyphicon-heart">{MusicElement.Likes}</span></p>
        </div>
      </li>
    );
  }
}

MusicElement.propTypes = {
  music: PropTypes.object
};

export default MusicElement;