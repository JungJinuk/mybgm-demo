import React, { Component, PropTypes } from 'react';



class BestSeller extends Component {
  
  play(){
      //Sets the active song to the song being played. All other functions depend on this.
      activeSong = document.getElementById("song");
      //Plays the song defined in the audio tag.
      activeSong.play();

      //Calculates the starting volume percentage of the song.
      //var percentageOfVolume = activeSong.volume / 1;
      //var percentageOfVolumeMeter = document.getElementById('volumeMeter').offsetWidth * percentageOfVolume;

      //Fills out the volume status bar.
      //document.getElementById('volumeStatus').style.width = Math.round(percentageOfVolumeSlider) + "px";
    }
  render() {
    
    let bestSeller = this.props.bestSeller;

    return (
      <li className="BestSeller">
        <img className="play" src="/data/images/etc/play-button.png" onClick={this.props.play()}/>
        <img className="cover" src={bestSeller.Path} />
        <div className="detail"><p><b>{bestSeller.Title}</b></p>
          <p>{bestSeller.Artist}</p></div>
        <img className="wave" src={bestSeller.Wave} />
        <audio id="song" className="song" src={bestSeller.Song} controls />
      </li>
    );
  }
}

BestSeller.propTypes = {

};

export default BestSeller;