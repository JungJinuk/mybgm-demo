import React, { Component, PropTypes } from 'react';
import { NavItem } from 'react-bootstrap';

class CategoryNavi extends Component {
 
  render() {
    return (
      <NavItem
        eventKey={this.props.key}
        onClick={this.props.onClick}>
        {this.props.kind.Kind}
      </NavItem>
    );
  }
}

CategoryNavi.propTypes = {

};

export default CategoryNavi;