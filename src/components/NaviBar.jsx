import React, { Component, PropTypes } from 'react';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';

const navbarInstance = (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">회원가입</NavItem>
        <NavItem eventKey={2} href="#">로그인</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

class NaviBar extends Component {


  render() {
    return (
      <div className="container-fluid">
        <div className="navbar navbar-default navbar-fixed-top">
          {navbarInstance}
        </div>
      </div>
    );
  }
}

NaviBar.propTypes = {

};

export default NaviBar;