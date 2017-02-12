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
      searchKeywords:[]
    }

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(searchText) {
    this.setState((prevState) => {
      var localSearchText = searchText; 
      return {
        searchKeywords: prevState.searchKeywords.concat(localSearchText)
      };
    });
    console.log(this.state.searchKeywords)
  }
  
  render() {
    return (
      <div>
        <NaviBar/>
        <SearchBar 
          style={searchBarCSS}
          onUserInput={this.handleUserInput}
        />
        <SearchKeywordBoard 
          style={searchKeywordBoardCSS}
          searchKeywords={this.state.searchKeywords}  
        />
        <BestSellerBoard />
        <Footer/>
      </div>
    );
  }
}

export default SearchSound;
