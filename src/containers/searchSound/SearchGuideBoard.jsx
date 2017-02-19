import React, { Component, PropTypes } from 'react';
import SearchGuideOptions from './SearchGuideOptions';

class SearchGuideBoard extends Component {
  constructor(props) {
    super(props);

    this.handleOptionClick = this.handleOptionClick.bind(this);
  }

  handleOptionClick(clickedCategory) {
    var searchKeywords = this.props.searchKeywords;
    if (searchKeywords.includes(clickedCategory)) {
      this.props.onUserDelete(searchKeywords.indexOf(clickedCategory));
    } else {
      this.props.onUserInput(clickedCategory);
    }
  }

  render() {
    var handleOptionClick = this.handleOptionClick,
        searchKeywords = this.props.searchKeywords,
        category = this.props.category;
        
    return (
      <div className="col-md-12">
        <h3 style={{textAlign:"center"}}>Search Guide</h3>
        <hr />
        <h4>Genre</h4>
        <SearchGuideOptions
          categoryName={category.Genre}
          onUserCategoryClick={handleOptionClick}
          searchKeywords={searchKeywords}
        />
        <hr />
        <h4>Moods</h4>
        <SearchGuideOptions
          categoryName={category.Moods}
          onUserCategoryClick={handleOptionClick}
          searchKeywords={searchKeywords}
        />
        <hr />
        <h4>Instrument</h4>
        <SearchGuideOptions
          categoryName={category.Instrument}
          onUserCategoryClick={handleOptionClick}
          searchKeywords={searchKeywords}
        />
      </div>
    );
  }
}

SearchGuideBoard.propTypes = {
  onUserInput: PropTypes.func,
  onUserDelete: PropTypes.func,
  searchKeywords: PropTypes.arrayOf(PropTypes.string),
  category: PropTypes.object
};

export default SearchGuideBoard;