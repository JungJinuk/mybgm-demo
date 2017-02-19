import React, { Component, PropTypes } from 'react';
import Wavesurfer from '../../../lib/react-wavesurfer';

const opt={
  height:50,
  width:500,
  // fillParent: true,
  minPxPerSec: 5
};

class WaveController extends Component {
  render() {
    return (
      <div className="wave-padding">
        <Wavesurfer
          audioFile={this.props.song}
          playing={this.props.playing}
          onReady={this.handleReady}
          options={opt}
        />
      </div>
    );
  }
}

WaveController.propTypes = {

};

export default WaveController;
