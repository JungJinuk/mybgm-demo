import React, { Component, PropTypes } from 'react';
import Wave from './Wave';
import WaveCSS from './WaveBox.css';

const bestSeller = {
  Artist: {
    Name: 'Imagine Dragons',
  },
  Music: {
    Song: '/data/musics/Bright_Acoustic_guitar.mp3',
    Title: 'Amsterdam',
    Price: 1900,
    Image: '/data/images/cover/City Of Stars.png',
    Likes: 20,
    Genre: ['Pop'],
    Mood: ['Happy', 'Energetic'],
    Instrument: ['Popular', 'Electronic'],
    Keyword: ['Trip']
  }
};

class WaveBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false
    };
  }

  render() {
    return (
      <div className="wave-box-boarder">
        <Wave song={bestSeller.Music.Song} playing={this.state.playing} />
        <p className="music-title">Valentino Piano</p>
        <p className="music-author">by THEJRSOUNDDESIGN</p>
        <p className="music-tag">pop piano newage romance classic emotion sideshow classical</p>
      </div>
    );
  }
}

export default WaveBox;
