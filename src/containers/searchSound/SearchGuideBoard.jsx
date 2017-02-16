import React, { Component, PropTypes } from 'react';
import SearchGuideOptions from './SearchGuideOptions';

let category = {
  Genre: ['pop', 'rock', 'electronic'],
  Moods: ['happy', 'energetic', 'sad'],
  Instrument: ['popular', 'electronic', 'wind']
};

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
        searchKeywords = this.props.searchKeywords;
        
    return (
      <div className="nav-tabs-left">
        <h3>Search Guide</h3>
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
  searchKeywords: PropTypes.arrayOf(PropTypes.string)
};

export default SearchGuideBoard;