import React, { Component, PropTypes } from 'react';

class CategoryNavi extends Component {
 
  render() {
    return (
      <li
        className="nav nav-tabs" 
        onClick={this.props.onClick}>
        {this.props.kind.Kind}
      </li>
    );
  }
}

CategoryNavi.propTypes = {

};

export default CategoryNavi;