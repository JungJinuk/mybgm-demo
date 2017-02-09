import React, { Component, PropTypes } from 'react';
import { Nav, NavItem } from 'react-bootstrap';

const navInstance = (
  <Nav bsStyle="pills" activeKey={1}>
    <NavItem eventKey={1}>HOME</NavItem>
    <NavItem eventKey={2}>ABOUT</NavItem>
    <NavItem eventKey={3}>ABOUT2</NavItem>
    <NavItem eventKey={4}>ABOUT3</NavItem>
  </Nav>
)


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
          <div className="collapse navbar-collapse navbar-right">
            {navInstance}
          </div>
        </div>
      </div>
      
    );
  }
}

NaviBar.propTypes = {

};

export default NaviBar;