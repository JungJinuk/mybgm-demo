import React, { Component, PropTypes } from 'react';
import Wavesurfer from '../../../lib/react-wavesurfer';

const opt={
  height:180,
  width:200,
  // fillParent: true,
  minPxPerSec: 5,
  normalize: true,
  pixelRatio: 1,
  backend: "MediaElement"
};

class Wave extends Component {
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

export default Wave;
