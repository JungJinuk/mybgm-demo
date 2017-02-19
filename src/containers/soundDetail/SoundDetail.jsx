import React, { Component, PropTypes } from 'react';
import NaviBar from '../../components/NaviBar/NaviBar';
import Footer from '../../components/Footer/Footer';
import PurchaseBoard from '../../components/purchaseBoard/PurchaseBoard';
import BestSeller from '../../components/bestSellerBoard/WaveController';
import SoundDetailInfo from '../../components/soundDetailInfo/SoundDetailInfo';
import AuthorPorfile from '../../components/authorProfile/AuthorProfile';
import Media from '../../components/media/MediaList';
import BestSellerCSS from '../../components/bestSellerBoard/musicList.css';

const bestSeller = { Title: 'City Of Stars', Artist: 'Ryan Gosling', Path: '/data/images/cover/City Of Stars.png',
    Wave: '/data/images/wave/City Of Stars_wave.png', Price: '1900', Song:'/data/musics/Imagine Dragons.mp3' };

class SoundDetail extends Component {
  render() {
    return (
      <div>
        <NaviBar/>
        <div className="row">
          <div className="col-md-8">
            <BestSeller
              bestSeller= {bestSeller}
              style={BestSellerCSS}
            />
            <SoundDetailInfo/>
          </div>
          <div className="col-md-4">
            <PurchaseBoard/>
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
