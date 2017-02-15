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
    this.props.onUserInput(clickedCategory);
  }

  render() {
    return (
      <div className="nav-tabs-left">
        <h3>Search Guide</h3>
        <hr />
        <h4>Genre</h4>
        <SearchGuideOptions
          categoryName={category.Genre}
          onUserCategoryClick={this.handleOptionClick}
        />
        <hr />
        <h4>Moods</h4>
        <SearchGuideOptions
          categoryName={category.Moods}
          onUserCategoryClick={this.handleOptionClick}
        />
        <hr />
        <h4>Moods</h4>
        <SearchGuideOptions
          categoryName={category.Instrument}
          onUserCategoryClick={this.handleOptionClick}
        />
      </div>
    );
  }
}

SearchGuideBoard.propTypes = {
  onUserInput: PropTypes.func,
  searchKeywords: PropTypes.arrayOf(PropTypes.string)
};

export default SearchGuideBoard;