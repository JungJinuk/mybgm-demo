import React, { Component, PropTypes } from 'react';

class CategoryTabContent extends Component {
  render() {
    return (
      <div className="col-md-2 my-category-elements">
        <h4 className="my-category-element-h4">{this.props.element}</h4>
      </div>
    );
  }
}

export default CategoryTabContent;
