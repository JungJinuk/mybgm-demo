import React, { Component, PropTypes } from 'react';

class AuthorProfile extends Component {
  render() {
    return (
      <div>
        <div className="col-md-12 row">
          <div className="col-md-3">
            <img className="thumbnail" src="/images/author.jpg" alt="author"/>
          </div>
          <div className="col-md-9">
            <div className="row">
              <span>Alec_Koff</span>
              <button className="btn btn-default">포트폴리오</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthorProfile;
