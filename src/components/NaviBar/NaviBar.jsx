import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class NaviBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid col-xs-8 col-xs-offset-2">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">MyBGM</Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/sound/search"><span className="glyphicon glyphicon-search"></span>{' '}SEARCH</Link></li>
              <li><Link to="/sound/detail"><span className="glyphicon glyphicon-music"></span>{' '}DETAIL</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/"><span className="glyphicon glyphicon-globe"></span>{' '}회원가입</Link></li>
              <li><Link to="/"><span className="glyphicon glyphicon-user"></span>{' '}로그인</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

NaviBar.propTypes = {

};

export default NaviBar;
