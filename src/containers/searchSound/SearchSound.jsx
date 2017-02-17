import React, { Component, PropTypes } from 'react';

import NaviBar from '../../components/NaviBar/NaviBar';
import Footer from '../../components/Footer/Footer';
import SearchBar from './SearchBar';
import SearchKeywordBoard from './SearchKeywordBoard';
import SearchResultBoard from './SearchResultBoard';
import SearchGuideBoard from './SearchGuideBoard';

import searchBarCSS from './search-bar.css';
import searchKeywordBoardCSS from './search-keyword.css';
import searchResultBoardCSS from './search-resultboard.css';
import searchGuideBoardCSS from './search-guidboard.css';

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
      Genre: ['Pop'],
      Mood: ['Happy', 'Energetic'],
      Instrument: ['Popular', 'Electronic'],
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
  {
    Artist: {
      Name: 'Twenty One Pilots',
    },
    Music: {
      Song: '/data/musics/Twenty one pilots - Car Radio.mp3',
      Title: 'Car Radio',
      Price: 1900,
      Image: '/data/images/cover/City Of Stars.png',
      Likes: 200,
      Genre: ['Pop'],
      Mood: ['Sad'],
      Instrument: ['Popular', 'Electronic'],
      Keyword: ['Sea']
    }
  },
  {
    Artist: {
      Name: 'Rise Against',
    },
    Music: {
      Song: '/data/musics/Rise Against - Prayer Of The Refugee.mp3',
      Title: 'Prayer Of The Refugee',
      Price: 1900,
      Image: '/data/images/cover/City Of Stars.png',
      Likes: 15,
      Genre: ['Rock'],
      Mood: ['Energetic'],
      Instrument: ['Popular'],
      Keyword: ['Power']
    }
  },
  {
    Artist: {
      Name: 'The Killers',
    },
    Music: {
      Song: '/data/musics/The Killers - Mr.Brightside.mp3',
      Title: 'Mr.Brightside',
      Price: 1900,
      Image: '/data/images/cover/City Of Stars.png',
      Likes: 30,
      Genre: ['Pop', 'Rock'],
      Mood: ['Energetic'],
      Instrument: ['Popular'],
      Keyword: ['Miss']
    }
  },
  {
    Artist: {
      Name: 'Evanescence',
    },
    Music: {
      Song: '/data/musics/Evanescence - Bring Me To Life.mp3',
      Title: 'Bring Me To Life',
      Price: 1900,
      Image: '/data/images/cover/City Of Stars.png',
      Likes: 90,
      Genre: ['Rock'],
      Mood: ['Sad'],
      Instrument: ['Popular'],
      Keyword: ['Miss']
    }
  },
  {
    Artist: {
      Name: 'Foo Fighters',
    },
    Music: {
      Song: '/data/musics/Foo Fighters - The Pretender.mp3',
      Title: 'The Pretender',
      Price: 1900,
      Image: '/data/images/cover/City Of Stars.png',
      Likes: 99,
      Genre: ['Rock'],
      Mood: ['Energetic'],
      Instrument: ['Popular'],
      Keyword: ['Powerful']
    }
  },
  {
    Artist: {
      Name: 'Fall Out Boy',
    },
    Music: {
      Song: '/data/musics/Fall Out Boy - Centuries.mp3',
      Title: 'Centuries',
      Price: 1900,
      Image: '/data/images/cover/City Of Stars.png',
      Likes: 12,
      Genre: ['Rock'],
      Mood: ['Energetic'],
      Instrument: ['Popular'],
      Keyword: ['Powerful']
    }
  },
  {
    Artist: {
      Name: 'Linkin Park',
    },
    Music: {
      Song: '/data/musics/Linkin Park - Somewhere I Belong.mp3',
      Title: 'Somewhere I Belong',
      Price: 1900,
      Image: '/data/images/cover/City Of Stars.png',
      Likes: 32,
      Genre: ['Pop', 'Rock'],
      Mood: ['Energetic'],
      Instrument: ['Popular', 'Electronic'],
      Keyword: ['Mistery']
    }
  },
];

let category = {
  Genre: ['이지리스닝', '재즈', '락', '댄스', '팝', '소울', '힙합', '클래식', '어쿠스틱', '월드뮤직',
    '일렉트로닉', '코믹&키즈', '종교음악', '크로스오버', '효과음'],
  Moods: ['BRIGHT', 'ENERGETIC', 'EMOTIONAL', 'DRAMA', 'FRESH', 'FUN', 'SAD', 'SENTIMENTAL',
    'TENSION', 'MYSTERY', 'FANTASY', 'SEXY', 'POWERFUL', 'MAGNIFICIENT', 'CHIC', 'SEASON', 'DANCY'],
  Instrument: ['키보드', '기타', '스트링', '관악기', '오케스트라',
    '타악기', '보이스', '신스', '국악', '전통악기']
};

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
    //var newSearchTextArr = searchText.split(" ");
    this.setState((prevState) => {
      return {
        searchKeywords: prevState.searchKeywords.concat(searchText)
      };
    });
  }

  filterKeyword(keywords) {
    var filteredList = musicDataSamples.filter((music, index) => {
      var i, matchCount = 0, toLowerKeywords = keywords.map(keyword => keyword.toLowerCase()),
        musicObj = music.Music;
      var combineAllKeyword =
        musicObj.Genre.concat(
          musicObj.Mood,
          musicObj.Instrument,
          musicObj.Keyword,
          musicObj.Title,
          music.Artist.Name).map((keyword) => keyword.toLowerCase());

      for (i = 0; i < toLowerKeywords.length; i++) {
        combineAllKeyword.forEach((keyword) => {
          if (keyword.includes(toLowerKeywords[i])) {
            matchCount++;
          }
        });
      }

      // 검색하지 않아도 무조건 모든 곡을 렌더링하는 것 수정필요
      console.log(matchCount);
      if (matchCount > 0) {
        return true;
      } else {
        return false;
      }
    });

    return filteredList;
  }

  render() {
    var userSearchKeywords = this.state.searchKeywords,
        filteredList = this.filterKeyword(userSearchKeywords);

    return (
      <div>
        <NaviBar />
        <SearchBar
          style={searchBarCSS}
          onUserInput={this.handleUserInput}
          category={category}
          musicData={musicDataSamples}
          searchKeywords={userSearchKeywords}
        />
        <SearchKeywordBoard
          style={searchKeywordBoardCSS}
          searchKeywords={userSearchKeywords}
          onUserDelete={this.handleUserDelete}
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-3">
                <SearchGuideBoard
                  style={searchGuideBoardCSS}
                  onUserInput={this.handleUserInput}
                  onUserDelete={this.handleUserDelete}
                  searchKeywords={userSearchKeywords}
                  category={category}
                />
              </div>
              <div className="col-md-9">
                <SearchResultBoard
                  filteredList={filteredList}
                  style={searchResultBoardCSS}
                  searchKeywords={userSearchKeywords}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SearchSound;
