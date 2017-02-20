import React, { Component, PropTypes } from 'react';
import authorCSS from './author.css'

class AuthorProfile extends Component {
  render() {
    return (
      <div>
        <div className="row box-boarder">
          <div className="col-md-3">
            <img className="thumbnail" src="/images/author.jpg" alt="author"/>
          </div>
          <div className="col-md-9">
            <div className="row">
              <span className="author-name">Alec_Koff</span>
              <button className="btn btn-default pull-right">포트폴리오</button>
              <div className="author-badge">
                <img className="" src="/images/badge/b_1.png" alt="badge"/>
                <img className="" src="/images/badge/b_2.png" alt="badge"/>
                <img className="" src="/images/badge/b_3.png" alt="badge"/>
                <img className="" src="/images/badge/b_4.png" alt="badge"/>
              </div>
            </div>
          </div>
          <div className="row author-album">
            <div className="col-md-3">
              <img className="" src="/images/media/me_4.jpg" alt="author"/>
              <button className="btn btn-default btn-xs center-block">고요한</button>
            </div>
            <div className="col-md-3">
              <img className="" src="/images/media/me_2.jpg" alt="author"/>
              <button className="btn btn-default btn-xs center-block">고요한</button>
            </div>
            <div className="col-md-3">
              <img className="" src="/images/media/me_6.jpg" alt="author"/>
              <button className="btn btn-default btn-xs center-block">고요한</button>
            </div>
            <div className="col-md-3">
              <img className="" src="/images/media/me_5.jpg" alt="author"/>
              <button className="btn btn-default btn-xs center-block">고요한</button>
            </div>
          </div>
          <div className="row keyword">
            <span>키워드 :
              <button type="button" className="btn btn-default btn-sm">분위기</button>
              <button className="btn btn-default btn-sm">선명한</button>
              <button className="btn btn-default btn-sm">재즈</button>
              <button className="btn btn-default btn-sm">팝</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthorProfile;
