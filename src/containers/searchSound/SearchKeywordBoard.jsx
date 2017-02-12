import React, { Component, PropTypes } from 'react';

class SearchKeywordBoard extends Component {
  constructor(props) {
    super(props);

    this.handleKeywordDelete = this.handleKeywordDelete.bind(this);
  }

  handleKeywordDelete(e) {
    var targetId = e.target.title;
    if (targetId === null && targetId === undefined) return;
    this.props.onUserDelete(targetId);
  }

  render() {
    const searchKeywordCards = this.props.searchKeywords.map((keyword, id) => {
      return (
        <h4 key={id}>
          <span className="label label-info">{keyword}{' '}
            <a onClick={this.handleKeywordDelete}>
              <span className="glyphicon glyphicon-remove" aria-hidden="true" title={id}/>
            </a>
          </span>
        </h4>
      );
    });

    return (
      <div className="search-keyword">
        <div className="container">
          <div className="row">
            {searchKeywordCards}<h4>원하시는 검색어나 카테고리를 추가하세요</h4>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

SearchKeywordBoard.propTypes = {
  searchKeywords: PropTypes.arrayOf(PropTypes.string),
  onUserDelete: PropTypes.func
};

export default SearchKeywordBoard;