import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class CategoryTabContent extends Component {
  render() {
    var categoryElement = this.props.element;
    return (
      <div className="col-md-4 my-category-elements">
        <Link to={`sound/search/${categoryElement}`}>
          <h5 className="my-category-element-h4">{categoryElement}</h5></Link>
      </div>
    );
  }
}

CategoryTabContent.propTypes = {
  element: PropTypes.string
};



export default CategoryTabContent;
