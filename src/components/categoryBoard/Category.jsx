import React, { Component, PropTypes } from 'react';

class Category extends Component {
  render() {
    return (
      <li>{this.props.element}</li>
    );
  }
}

Category.propTypes = {

};

export default Category;