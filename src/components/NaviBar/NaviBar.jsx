import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Modal } from 'react-bootstrap';

import SignInModal from '../../containers/modal/SignInModal';
import LogInModal from '../../containers/modal/LogInModal';

import modalstyleCSS from '../../containers/modal/modalstyle.css';

class NaviBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSigninModal: false,
      showLoginModal: false
    }
    this.toggleSigninModal = this.toggleSigninModal.bind(this);
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
  }

  toggleSigninModal() {
    this.setState({
      showSigninModal: !this.state.showSigninModal,
      showLoginModal: this.state.showLoginModal
    });
  }

  toggleLoginModal() {
    this.setState({
      showSigninModal: this.state.showSigninModal,
      showLoginModal: !this.state.showLoginModal
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid col-xs-8 col-xs-offset-2">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand"><img src="images/LogoImage.png" style={{ width: "62px", height: "27px" }} /></Link>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li><Link to="sound/search"><span className="glyphicon glyphicon-search"></span>{' '}SEARCH</Link></li>
                <li><Link to="regist"><span className="glyphicon glyphicon-music"></span>{' '}음원등록하기</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li onClick={this.toggleSigninModal}><a><span className="glyphicon glyphicon-globe"></span>{' '}회원가입</a></li>
                <li onClick={this.toggleLoginModal}><a><span className="glyphicon glyphicon-user"></span>{' '}로그인</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <SignInModal style={modalstyleCSS} isShow={this.state.showSigninModal} toggleClick={this.toggleSigninModal} />
        <LogInModal style={modalstyleCSS} isShow={this.state.showLoginModal} toggleClick={this.toggleLoginModal} />
      </div>
    );
  }
}

NaviBar.propTypes = {

};

export default NaviBar;
