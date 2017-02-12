import React, { Component, PropTypes } from 'react';

class SearchKeywordBoard extends Component {
  render() {
    const searchKeywordCards = this.props.searchKeywords.map((keyword, i) => {
      return (
        <h4 key={i}><span className="label label-info">{keyword}</span></h4>
      );
    });

    return (
      <div className="search-keyword">
        <div className="container">
          <div className="row">
            {searchKeywordCards}
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

SearchKeywordBoard.propTypes = {
  searchKeywords: PropTypes.arrayOf(PropTypes.string)
};

export default SearchKeywordBoard;