import React, { Component, PropTypes } from 'react';

class SearchGuideOptions extends Component {
  constructor(props) {
    super(props);

    this.handleCategoryClick = this.handleCategoryClick.bind(this);
  }

  handleCategoryClick(category) {
    this.props.onUserCategoryClick(category);
  }

  render() {
    var btnState = "",
     categoryList = this.props.categoryName.map((element, index) => {
       var lowerCaseElement = element.toLowerCase();
      if (this.props.searchKeywords.includes(lowerCaseElement)) {
        btnState = "btn btn-sm btn-info"
      } else {
        btnState = "btn btn-sm btn-default"
      }

      return (
        <button
          key={index}
          onClick={() => this.handleCategoryClick(lowerCaseElement)}
          className={btnState}>{element}</button>
      );
    });

    return (
      <div className="my-categorylist">
        {categoryList}
      </div>
    );
  }
}

SearchGuideOptions.propTypes = {
  categoryName: PropTypes.arrayOf(PropTypes.string),
  onUserCategoryClick: PropTypes.func,
  searchKeywords: PropTypes.arrayOf(PropTypes.string)
};

export default SearchGuideOptions;