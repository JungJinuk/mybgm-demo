import React, { Component, PropTypes } from 'react';
import MusicListCSS from './musicList.css';
import MusicElement from '../../containers/searchSound/MusicElement';

let bestSellerDataSamples = [
  {
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
  },
  {
    Artist: {
      Name: 'Linkin Park',
    },
    Music: {
      Song: '/data/musics/Bright_Easylistening_Guitar.mp3',
      Title: 'Faint',
      Price: 1900,
      Image: '/data/images/cover/City Of Stars.png',
      Likes: 12,
      Genre: ['Pop', 'Rock'],
      Mood: ['Energetic'],
      Instrument: ['Popular', 'Electronic'],
      Keyword: ['Powerful']
    }
  },
  {
    Artist: {
      Name: 'Twenty One Pilots',
    },
    Music: {
      Song: '/data/musics/easylistening_Emotional_Guitar.mp3',
      Title: 'Car Radio',
      Price: 1900,
      Image: '/data/images/cover/City Of Stars.png',
      Likes: 200,
      Genre: ['Pop'],
      Mood: ['Sad'],
      Instrument: ['Popular', 'Electronic'],
      Keyword: ['Sea']
    }
  },
  {
    Artist: {
      Name: 'Rise Against',
    },
    Music: {
      Song: '/data/musics/Rise Against - Prayer Of The Refugee.mp3',
      Title: 'Prayer Of The Refugee',
      Price: 1900,
      Image: '/data/images/cover/City Of Stars.png',
      Likes: 15,
      Genre: ['Rock'],
      Mood: ['Energetic'],
      Instrument: ['Popular'],
      Keyword: ['Power']
    }
  },
  {
    Artist: {
      Name: 'The Killers',
    },
    Music: {
      Song: '/data/musics/The Killers - Mr.Brightside.mp3',
      Title: 'Mr.Brightside',
      Price: 1900,
      Image: '/data/images/cover/City Of Stars.png',
      Likes: 30,
      Genre: ['Pop', 'Rock'],
      Mood: ['Energetic'],
      Instrument: ['Popular'],
      Keyword: ['Miss']
    }
  },
  {
    Artist: {
      Name: 'Evanescence',
    },
    Music: {
      Song: '/data/musics/Evanescence - Bring Me To Life.mp3',
      Title: 'Bring Me To Life',
      Price: 1900,
      Image: '/data/images/cover/City Of Stars.png',
      Likes: 90,
      Genre: ['Rock'],
      Mood: ['Sad'],
      Instrument: ['Popular'],
      Keyword: ['Miss']
    }
  },
];

class BestSellerBoard extends Component {
  render() {
    const bestSellerDetail = bestSellerDataSamples.map((bestSeller, index) => {
      return (
        <MusicElement
          //onClick={() => this.handleClick(index)}
          key={index}
          music={bestSeller}
          style={MusicListCSS}
        />
      );
    });

    return (
      <div>
        <ul>
          {bestSellerDetail}
        </ul>
      </div>
    );
  }
}

export default BestSellerBoard;
