import React, { Component, PropTypes } from 'react';
import { Modal } from 'react-bootstrap';

class SignInModal extends Component {
  render() {
    return (
      <Modal show={this.props.isShow} onHide={this.props.toggleClick}>
        <Modal.Header>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-info" onClick={this.props.toggleClick}>Close</button>
        </Modal.Footer>
      </Modal>
    );
  }
}

SignInModal.propTypes = {

};

export default SignInModal;