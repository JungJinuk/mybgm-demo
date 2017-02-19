import React, { Component, PropTypes } from 'react';

class CategoryTab extends Component {
 
  render() {
    var isActive = (this.props.selected === this.props.id) ? "active" : "noActive";

    return (
      <li
        className={isActive}
        onClick={this.props.onClick}>
        <a href="#/">
          {this.props.category}
        </a>
      </li>
    );
  }
}

CategoryTab.propTypes = {
  selected: PropTypes.number,
  onClick: PropTypes.func,
  category: PropTypes.string,
  id: PropTypes.number
};



export default CategoryTab;
