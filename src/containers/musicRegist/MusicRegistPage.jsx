import React, { Component, PropTypes } from 'react';
import NaviBar from '../../components/NaviBar/NaviBar';
import Footer from '../../components/Footer/Footer';
import ArtistInfo from './ArtistInfo';
import RegistForm from './RegistForm';

class MusicRegist extends Component {
  render() {
    return (
      <div>
        <NaviBar />
        <div className="container">
          <hr />
          <div className="col-md-offset-1 col-md-11">
            <h1>마이비지엠 음원 등록하기</h1>
            <ArtistInfo /> 
            <hr />
          </div>
          <RegistForm />
        </div>
        <Footer />
      </div>
    );
  }
}

MusicRegist.propTypes = {

};

export default MusicRegist;