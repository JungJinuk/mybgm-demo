import React, { Component, PropTypes } from 'react';

class SNS extends Component {
  render() {
    return (
      <div className="company">
        <address>
          <strong>MyBGM, Inc. 2017</strong>
        </address>
        <i style={{fontSize:"24px"}} className="fa sns-icon">&#xf082;</i>
        <i style={{fontSize:"24px"}} className="fa sns-icon">&#xf081;</i>
        <i style={{fontSize:"24px"}} className="fa sns-icon">&#xf0d4;</i>
        <i style={{fontSize:"24px"}} className="fa sns-icon">&#xf16a;</i>
        <i style={{fontSize:"24px"}} className="fa sns-icon">&#xf16d;</i>
      </div>
    );
  }
}

export default SNS;
