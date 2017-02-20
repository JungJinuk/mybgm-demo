import React, { Component, PropTypes } from 'react';

class SearchKeywordBoard extends Component {
  constructor(props) {
    super(props);

    this.handleKeywordDelete = this.handleKeywordDelete.bind(this);
  }

  handleKeywordDelete(id) {
    var targetId = id;
    if (targetId === null && targetId === undefined) return;
    this.props.onUserDelete(targetId);
  }

  render() {
    const h4Ment = "원하시는 검색어나 카테고리를 추가하세요",
      searchKeywordCards = this.props.searchKeywords.map((keyword, id) => {
        return (
          <h4 key={id} className="my-keyword-board">
            <span className="label label-info">{keyword}{' '}
              <a onClick={() => this.handleKeywordDelete(id)} className="my-remove-keyword">
                <span className="glyphicon glyphicon-remove" aria-hidden="true" />
              </a>
            </span>
          </h4>
        );
      });

    return (
      <div className="search-keyword">
        <div className="container">
          <div className="row">
            {searchKeywordCards}<h4 className="my-keyword-board">{h4Ment}</h4>
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