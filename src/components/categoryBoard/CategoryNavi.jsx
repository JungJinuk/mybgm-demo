import React, { Component, PropTypes } from 'react';

class CategoryNavi extends Component {
 
  render() {

    let className = (this.props.selected === this.props.id) ? "active" : "noActive";

    return (
      <li
        className={className}
        onClick={this.props.onClick}>
        <a href="#">
          {this.props.category.Kind}
        </a>
      </li>
    );
  }
}

export default CategoryNavi;
