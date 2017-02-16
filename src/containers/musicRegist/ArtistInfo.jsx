import React, { Component, PropTypes } from 'react';

class ArtistInfo extends Component {
  render() {
    return (
      <div className="media">
        <div className="media-left">
          <a href="#/regist">
            <img src="images/artist/drake.jpg" style={{width:"64px", height:"64px"}}/>
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">Name: Drake</h4>
          <p>Hi my name is Drake I love pop, rock, rap</p>
        </div>
      </div>
    );
  }
}

ArtistInfo.propTypes = {

};

export default ArtistInfo;