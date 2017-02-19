import React, { Component, PropTypes } from 'react';
import { Modal } from 'react-bootstrap';

class SignInModal extends Component {
  constructor(props) {
    super(props);
    
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }
  
  handleLoginSubmit(e) {
    e.preventDefault();
    this.props.toggleClick();
    alert("회원가입 되었습니다. 환영합니다!");
  }

  render() {
    return (
      <Modal show={this.props.isShow} onHide={this.props.toggleClick} className="login-modal">
        <Modal.Header className="my-modal-signin-cover-photo">
        </Modal.Header>
        <Modal.Body className="body cf">
          <a href="#/" className="fb-login">Sign In with Facebook</a>
          <p className="or-divider"><span>OR</span></p>
          <form action="#" className="login-form" onSubmit={this.handleLoginSubmit}>
            <input type="text" name="username" placeholder="Username or email" className="form-control" />
            <input type="text" name="password" placeholder="비밀번호" className="form-control" />
            <input type="text" name="password" placeholder="비밀번호 확인" className="form-control" />
            <div>
              <button type="submit" className="signin-form-submit">Sign In</button>
            </div>
            <p>회원 가입시 마이비지엠의 이용약관, 개인정보 수집 및 이용약관에 동의하는 것입니다.</p>
          </form>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <p className="right">
            이미 마이비지엠 회원이신가요? <a href="#/">로그인</a>
          </p>
        </Modal.Footer>
      </Modal>
    );
  }
}

SignInModal.propTypes = {
  isShow: PropTypes.bool,
  toggleClick: PropTypes.func
};

export default SignInModal;