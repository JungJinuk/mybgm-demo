import React, { Component, PropTypes } from 'react';

import NaviBar from '../../components/NaviBar/NaviBar';
import Footer from '../../components/Footer/Footer';
import SearchBar from './SearchBar';
import SearchKeywordBoard from './SearchKeywordBoard';
import BestSellerBoard from '../../components/bestSellerBoard/BestSellerBoard';

import searchBarCSS from './search-bar.css';
import searchKeywordBoardCSS from './search-keyword.css'

class SearchSound extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchKeywords: []
    }

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleUserDelete = this.handleUserDelete.bind(this);
  }

  handleUserDelete(clickedKeywordIndex) {
    this.setState((prevState) => {
      var updateKeywords = prevState.searchKeywords;
      updateKeywords.splice(clickedKeywordIndex, 1);
      return {
        searchKeywords: updateKeywords
      };
    });
  }

  handleUserInput(searchText) {
    var newSearchTextArr = searchText.split(" ");
    this.setState((prevState) => {
      return {
        searchKeywords: prevState.searchKeywords.concat(newSearchTextArr)
      };
    });
  }

  render() {
    return (
      <div>
        <NaviBar />
        <SearchBar
          style={searchBarCSS}
          onUserInput={this.handleUserInput}
        />
        <SearchKeywordBoard
          style={searchKeywordBoardCSS}
          searchKeywords={this.state.searchKeywords}
          onUserDelete={this.handleUserDelete}
        />
        <BestSellerBoard />
        <Footer />
      </div>
    );
  }
}

export default SearchSound;
