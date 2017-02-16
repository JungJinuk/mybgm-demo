import React, { Component, PropTypes } from 'react';

class RegistForm extends Component {
  render() {
    return (
      <form className="form-horizontal">
        <h3>음원 정보</h3>
        <div className="form-group">
          <label for="trackName" className="col-md-2 control-label">트랙이름</label>
          <div className="col-md-10">
            <input type="text" className="form-control" placeholder="트랙이름(Title)" />
          </div>
        </div>
        <div className="form-group">
          <label for="musicImage" className="col-md-2 control-label">대표이미지</label>
          <div>
            <a href="#" className="thumbnail">
            </a>
          </div>
        </div>
      </form>
    );
  }
}

RegistForm.propTypes = {

};

export default RegistForm;