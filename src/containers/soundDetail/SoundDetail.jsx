import React, { Component, PropTypes } from 'react';
import NaviBar from '../../components/NaviBar/NaviBar';
import Footer from '../../components/Footer/Footer';
import PurchaseBoard from '../../components/purchaseBoard/PurchaseBoard';
import WaveBox from '../../components/waveBox/WaveBox';
import SoundDetailInfo from '../../components/soundDetailInfo/SoundDetailInfo';
import AuthorPorfile from '../../components/authorProfile/AuthorProfile';
import Media from '../../components/media/MediaList';
import SoundDetailCSS from './SoundDetail.css';
import MusicListCSS from '../searchSound/musicElement.css';


//test
import shadow from './shadow.css'

class SoundDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false
    };
  }

  render() {
    return (
      <div>
        <NaviBar/>
        <div className="row nav-top-margin">
          <div className="col-md-8">
            <WaveBox/>
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
