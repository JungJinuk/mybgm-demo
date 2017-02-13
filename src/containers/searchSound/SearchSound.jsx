import React, { Component, PropTypes } from 'react';

import NaviBar from '../../components/NaviBar/NaviBar';
import Footer from '../../components/Footer/Footer';
import SearchBar from './SearchBar';
import SearchKeywordBoard from './SearchKeywordBoard';
import SearchResultBoard from './SearchResultBoard';
import BestSellerBoard from '../../components/bestSellerBoard/BestSellerBoard';

import searchBarCSS from './search-bar.css';
import searchKeywordBoardCSS from './search-keyword.css'

let musicDataSamples = [
  {
    Artist: {
      Name: 'Imagine Dragons',
    },
    Music: {
      Song: '/data/musics/Imagin Dragons-Amsterdam.mp3',
      Title: 'Amsterdam',
      Price: 1900,
      Image: '/data/images/cover/City Of Stars.png',
      Likes: 20,
      Genre: ['Pop', 'Rock'],
      Mood: ['Happy', 'Energetic'],
      Instrument: ['Popular', 'Electronic']
      Keyword: ['Trip']
    }
  },
  {
    Artist: {
      Name: 'Linkin Park',
    },
    Music: {
      Song: '/data/musics/Linkin Park-Faint.mp3',
      Title: 'Faint',
      Price: 1900,
      Image: '/data/images/cover/City Of Stars.png',
      Likes: 12,
      Genre: ['Pop', 'Rock'],
      Mood: ['Energetic'],
      Instrument: ['Popular', 'Electronic'],
      Keyword: ['Powerful']
    }
  },
];

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
    let userSearchKeywords = this.state.searchKeywords;
    return (
      <div>
        <NaviBar />
        <SearchBar
          style={searchBarCSS}
          onUserInput={this.handleUserInput}
        />
        <SearchKeywordBoard
          style={searchKeywordBoardCSS}
          searchKeywords={userSearchKeywords}
          onUserDelete={this.handleUserDelete}
        />
        <SearchResultBoard
          searchKeywords={userSearchKeywords}
          musicDataSamples = {musicDataSamples}
        />
        <BestSellerBoard />
        <Footer />
      </div>
    );
  }
}

export default SearchSound;
