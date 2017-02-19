import React, { Component, PropTypes } from 'react';
import MusicListCSS from '../../containers/searchSound/musicElement.css';
import MusicElement from '../../containers/searchSound/MusicElement';

let bestSellerDataSamples = [
  {
    Artist: {
      Name: 'LETSGO',
    },
    Music: {
      Song: '/data/musics/Energetic_Rock_Guitar.mp3',
      Title: 'The way to travel',
      Price: 1900,
      Image: '/data/images/cover/City Of Stars.png',
      Likes: 12,
      Genre: ['락'],
      Mood: ['ENERGETIC'],
      Instrument: ['기타'],
      Keyword: ['Travel', 'Car']
    }
  },
  {
    Artist: {
      Name: 'LETSGO',
    },
    Music: {
      Song: '/data/musics/Energetic_Soul_Brass.mp3',
      Title: 'Village Festival',
      Price: 1900,
      Image: '/data/images/cover/Counting Stars.png',
      Likes: 32,
      Genre: ['소울'],
      Mood: ['ENERGETIC'],
      Instrument: ['관악기'],
      Keyword: ['Festival', 'Jazz']
    }
  },
  {
    Artist: {
      Name: 'Third Steps from the Hell',
    },
    Music: {
      Song: '/data/musics/MAGNIFICIENT_CROSSOVER_CHOIR.mp3',
      Title: 'Just before the War',
      Price: 1900,
      Image: '/data/images/cover/Maps.png',
      Likes: 32,
      Genre: ['크로스오버'],
      Mood: ['MAGNIFICIENT'],
      Instrument: ['보이스'],
      Keyword: ['War', 'Tension']
    }
  },
  {
    Artist: {
      Name: 'Third Steps from the Hell',
    },
    Music: {
      Song: '/data/musics/MAGNIFICIENT_CROSSOVER_CHOIR2.mp3',
      Title: 'Chaser',
      Price: 1900,
      Image: '/data/images/cover/Ai Se Eu Te Pego.png',
      Likes: 32,
      Genre: ['크로스오버'],
      Mood: ['MAGNIFICIENT'],
      Instrument: ['보이스'],
      Keyword: ['Chase', 'Tension']
    }
  },
  {
    Artist: {
      Name: 'Child',
    },
    Music: {
      Song: '/data/musics/Tension_Crossover_String.mp3',
      Title: 'Haunted house',
      Price: 1900,
      Image: '/images/media/me_8.jpg',
      Likes: 32,
      Genre: ['크로스오버'],
      Mood: ['TENSION'],
      Instrument: ['스트링'],
      Keyword: ['Ghost', 'Fear']
    }
  },
  {
    Artist: {
      Name: 'Bertycox',
    },
    Music: {
      Song: '/data/musics/BertycoX - The Signal.mp3',
      Title: 'The signal',
      Price: 1900,
      Image: '/images/media/me_9.jpg',
      Likes: 32,
      Genre: ['일렉트로닉'],
      Mood: ['ENERGETIC', 'DANCY'],
      Instrument: ['신스'],
      Keyword: ['God', 'Good']
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
      <div className="container">
      <h2>Best Sellers <span className="glyphicon glyphicon-star"></span></h2>
      <hr />
        {bestSellerDetail}
      </div>
    );
  }
}

export default BestSellerBoard;
