import React, { Component, PropTypes } from 'react';

class componentName extends Component {
  constructor(props){
      super(props);
      this.state = {

      }
  }
  var wavesurfer = WaveSurfer.create({
    container: '#waveform'
});


wavesurfer.load('https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3');


    render() {
        return (
            <div>
                <div id="waveform"></div>
                
            </div>
        );
    }
}

componentName.propTypes = {

};

export default componentName;