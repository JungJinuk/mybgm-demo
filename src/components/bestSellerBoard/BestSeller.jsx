import React, { Component, PropTypes } from 'react';
import WaveController from './WaveController';


class BestSeller extends Component {
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

    let bestSeller = this.props.bestSeller;

    return (
      <li className="BestSeller">
        <img className="play" src={!this.state.playing ? "/data/images/etc/play-button.png" : "/data/images/etc/pause-button.png"}
          onClick={this.handleTogglePlay} />
        <img className="cover" src={bestSeller.Path} />
        <div className="detail"><p><b>{bestSeller.Title}</b></p>
          <p>{bestSeller.Artist}</p></div>
        <WaveController song={bestSeller.Song} playing={this.state.playing} />
      </li>
    );
  }
}

export default BestSeller;
