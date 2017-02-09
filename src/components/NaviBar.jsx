import React, { Component, PropTypes } from 'react';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const navbarInstance = (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a><Link to="/">React-Bootstrap</Link></a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1}><Link to="/search">Search</Link></NavItem>
        <NavItem eventKey={2}><Link to="/detail">Detail</Link></NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="/search">회원가입</NavItem>
        <NavItem eventKey={2} href="/detail">로그인</NavItem>
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