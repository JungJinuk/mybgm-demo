import React, { Component, PropTypes } from 'react';

class Category extends Component {
  render() {
    return (
      <li className="list-group-item">{this.props.element}</li>
    );
  }
}

Category.propTypes = {

};

export default Category;
