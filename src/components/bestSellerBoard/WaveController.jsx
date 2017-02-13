import React, { Component, PropTypes } from 'react';
import Wavesurfer from '../../../lib/react-wavesurfer';

const opt={
  height:50,
  width:200
}

class WaveController extends Component {
  render() {
    return (
      <div>
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