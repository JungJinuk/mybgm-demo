import React, { Component, PropTypes } from 'react';
import WaveController from '../../components/bestSellerBoard/WaveController';
import { Link } from 'react-router';

//munjo test css
import Margin from './margin.css'


class MusicElement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      likes: this.props.music.Music.Likes
    };

    this.handleTogglePlay = this.handleTogglePlay.bind(this);
    this.handleLikesClick = this.handleLikesClick.bind(this);
  }

  handleTogglePlay() {
    this.setState({
      playing: !this.state.playing
    });
  }

  handleLikesClick() {
    this.setState({
      likes: this.state.likes+1
    });
  }

  render() {
    var MusicElement = this.props.music.Music;

    return (
      <div className="row margin">
        <div className="row">
          <div className="col-md-1">
            <Link to="/sound/detail">
              <img className="cover" src={MusicElement.Image} />
            </Link>
          </div>
          <div className="col-md-9 my-music-info">
            <img className="play" src={!this.state.playing ? "/data/images/etc/play-button.png" : "/data/images/etc/pause-button.png"}
              onClick={this.handleTogglePlay} />
            <div className="detail">
              <p className="musicMiddlefont"><b>{MusicElement.Title}</b></p>
              <p className="musicSmallfont">{this.props.music.Artist.Name}</p>
              <p className="musicSmallfont likes" onClick={this.handleLikesClick}><span className="glyphicon glyphicon-heart"></span>{' '}{this.state.likes}</p>
            </div>
            <WaveController song={MusicElement.Song} playing={this.state.playing} />
          </div>
          <div className="col-md-2">
            <div className="detail">
              <p className="musicLargefont price"><img className="won-Image" src="/images/won-Image.png" /><b>{MusicElement.Price}</b></p>
              
            </div>
            <p className="musicSmallfont keyword">{"#"}{MusicElement.Keyword.join(" #")}</p>
          </div>
        </div>
      </div>
    );
  }
}

MusicElement.propTypes = {
  music: PropTypes.object
};

export default MusicElement;
