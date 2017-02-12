import React, { Component, PropTypes } from 'react';

class Category extends Component {
  render() {
    return (
      <li className="list-group-item">{this.props.element}</li>
    );
  }
}

export default Category;
