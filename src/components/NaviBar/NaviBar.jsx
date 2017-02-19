import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class NaviBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid col-xs-8 col-xs-offset-2">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand"><img src="images/LogoImage.png" style={{width:"62px", height:"27px"}}/></Link>  
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><Link to="sound/search"><span className="glyphicon glyphicon-search"></span>{' '}SEARCH</Link></li>
              <li><Link to="/regist"><span className="glyphicon glyphicon-music"></span>{' '}음원등록하기</Link></li>
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
