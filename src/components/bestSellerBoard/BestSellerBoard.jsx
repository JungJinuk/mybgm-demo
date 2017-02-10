import React, { Component, PropTypes } from 'react';
import BestSeller from './BestSeller'
import BestSellerCSS from './bestSeller.css'

let bestSellers = [
  { Title: 'City Of Stars', Artist: 'Ryan Gosling', Path: '/data/images/cover/City Of Stars.png', 
    Wave: '/data/images/wave/City Of Stars_wave.png', Price: '1900', Song:'/data/musics/Imagine Dragons.mp3' },
  { Title: 'Counting Stars', Artist: 'One Republic', Path: '/data/images/cover/Counting Stars.png', 
    Wave: '/data/images/wave/Counting Stars_wave.png', Price: '1900', Song:'/data/musics/demo.wav' },
  { Title: 'Maps', Artist: 'Maroon5', Path: '/data/images/cover/Maps.png', 
    Wave: '/data/images/wave/Maps_wave.png', Price: '1700', Song:'/data/musics/Imagine Dragons.mp3' },
  { Title: 'Uptown Funk', Artist: 'Mark Ranson', Path: '/data/images/cover/Uptown Funk.png', 
    Wave: '/data/images/wave/Uptown Funk_wave.png', Price: '1700', Song:'/data/musics/Imagine Dragons.mp3' },
  { Title: 'Plug In Baby', Artist: 'Muse', Path: '/data/images/cover/Plug In Baby.png', 
    Wave: '/data/images/wave/Plug In Baby_wave.png', Price: '1500', Song:'/data/musics/demo.wav' },
  { Title: 'Ai Se Eu Te Pego', Artist: 'Nossa Nossa', Path: '/data/images/cover/Ai Se Eu Te Pego.png', 
    Wave: '/data/images/wave/Ai Se Eu Te Pego_wave.png', Price: '1500', Song:'/data/musics/Imagine Dragons.mp3' },
];

class BestSellerBoard extends Component {
  render() {
    const bestSellerDetail = bestSellers.map((bestSeller, index) => {
      return (
        <BestSeller
          //onClick={() => this.handleClick(index)}
          key={index}
          bestSeller= {bestSeller}
          style={BestSellerCSS}
          />
      )
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
BestSellerBoard.propTypes = {
};

export default BestSellerBoard;