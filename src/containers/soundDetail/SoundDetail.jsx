import React, { Component, PropTypes } from 'react';
import NaviBar from '../../components/NaviBar/NaviBar';
import Footer from '../../components/Footer/Footer';
import PurchaseBoard from '../../components/purchaseBoard/PurchaseBoard';
import MusicElement from '../../containers/searchSound/MusicElement';
import SoundDetailInfo from '../../components/soundDetailInfo/SoundDetailInfo';
import AuthorPorfile from '../../components/authorProfile/AuthorProfile';
import Media from '../../components/media/MediaList';
import SoundDetailCSS from './SoundDetail.css';
import MusicListCSS from '../../components/bestSellerBoard/musicList.css';

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

class SoundDetail extends Component {
  render() {
    return (
      <div>
        <NaviBar/>
        <div className="row nav-top-margin">
          <div className="col-md-8">
            <MusicElement
              music={bestSeller}
              style={MusicListCSS}
            />
            <SoundDetailInfo/>
          </div>
          <div className="col-md-4">
            <PurchaseBoard pirce='2000'/>
            <AuthorPorfile/>
            <Media/>
            <Media/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default SoundDetail;
