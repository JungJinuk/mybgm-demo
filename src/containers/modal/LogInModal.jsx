import React, { Component, PropTypes } from 'react';
import { Modal } from 'react-bootstrap';

class LogInModal extends Component {
  constructor(props) {
    super(props);
    
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }
  
  handleLoginSubmit(e) {
    e.preventDefault();
    this.props.toggleClick();
    alert("로그인 되었습니다.");
  }

  render() {
    return (
      <Modal show={this.props.isShow} onHide={this.props.toggleClick} className="login-modal">
        <Modal.Header className="my-modal-login-cover-photo">
        </Modal.Header>
        <Modal.Body className="body cf">
          <a href="#/" className="fb-login">Log In with Facebook</a>
          <p className="or-divider"><span>OR</span></p>
          <form action="#" className="login-form" onSubmit={this.handleLoginSubmit}>
            <input type="text" name="username" placeholder="Username or email" className="form-control" />
            <input type="text" name="password" placeholder="비밀번호" className="form-control" />
            <a href="#/" className="forgot-pw">비밀번호를 잊어버리셨나요?</a>
            <div>
              <button type="submit" className="login-form-submit">Log In</button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <p className="right">
            아직 마이비지엠 회원이 아니신가요? <a href="#/">Join us today!</a>
          </p>
        </Modal.Footer>
      </Modal>
    );
  }
}

LogInModal.propTypes = {
  isShow: PropTypes.bool,
  toggleClick: PropTypes.func
};

export default LogInModal;