import React, { Component, PropTypes } from 'react';

class CategoryNavi extends Component {
 
  render() {
    return (
      <ul onClick={this.props.onClick}>
        {this.props.kind.Kind}
      </ul>
    );
  }
}

CategoryNavi.propTypes = {

};

export default CategoryNavi;