import React, { Component, PropTypes } from 'react';

class SearchGuideOptions extends Component {
  constructor(props) {
    super(props);
    
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
  }
  

  handleCategoryClick(e) {
    this.props.onUserCategoryClick(e.target.title);
  }

  
  render() {
    var categoryList = this.props.categoryName.map((element, index) => {
      return (
        <button
          key={index}
          title={element}
          onClick={this.handleCategoryClick}
          className="btn btn-sm btn-default">{element}</button>
      );
    });

    return (
      <div className="container">
        <div className="my-categorylist">
          {categoryList}
        </div>
      </div>
    );
  }
}

SearchGuideOptions.propTypes = {
  categoryName: PropTypes.arrayOf(PropTypes.string),
  onUserCategoryClick: PropTypes.func
};

export default SearchGuideOptions;