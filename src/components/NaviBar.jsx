import React, { Component, PropTypes } from 'react';

class NaviBar extends Component {
  render() {
    return (
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="#" className="navbar-brand">Logo</a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>ABOUT</li>
              <li>ABOUT</li>
              <li>ABOUT</li>
              <li>ABOUT</li>
              <li>ABOUT</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

NaviBar.propTypes = {

};

export default NaviBar;