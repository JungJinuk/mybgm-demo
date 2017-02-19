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
      Name: 'KnockingHeaven',
    },
    Music: {
      Song: '/data/musics/Bright_Acoustic_Guitar.mp3',
      Title: 'Happy Guitar',
      Price: 1900,
      Image: '/data/images/cover/City Of Stars.png',
      Likes: 20,
      Genre: ['어쿠스틱'],
      Mood: ['BRIGHT'],
      Instrument: ['기타'],
      Keyword: ['Happy', 'Guitar']
    }
  },
  {
    Artist: {
      Name: 'Gutarking',
    },
    Music: {
      Song: '/data/musics/Bright_Easylistening_Guitar.mp3',
      Title: 'My Birthday',
      Price: 1900,
      Image: '/data/images/cover/City Of Stars.png',
      Likes: 12,
      Genre: ['이지리스닝'],
      Mood: ['BRIGHT'],
      Instrument: ['기타'],
      Keyword: ['Happy', 'Guitar']
    }
  },
  {
    Artist: {
      Name: 'Hainz',
    },
    Music: {
      Song: '/data/musics/easylistening_Emotional_Guitar.mp3',
      Title: 'Morning Sunshine',
      Price: 1900,
      Image: '/data/images/cover/City Of Stars.png',
      Likes: 200,
      Genre: ['이지리스닝'],
      Mood: ['EMOTIONAL'],
      Instrument: ['기타'],
      Keyword: ['Sunshine', 'Morning']
    }
  },
  {
    Artist: {
      Name: 'Yeonjunjo',
    },
    Music: {
      Song: '/data/musics/Emotional_Acoustic_Guitar.mp3',
      Title: 'Fall Busking',
      Price: 1900,
      Image: '/data/images/cover/City Of Stars.png',
      Likes: 15,
      Genre: ['어쿠스틱'],
      Mood: ['EMOTIONAL'],
      Instrument: ['기타'],
      Keyword: ['Fall', 'Guitar', 'Lonely']
    }
  },
  {
    Artist: {
      Name: 'Yeonjunjo',
    },
    Music: {
      Song: '/data/musics/Emotional_Acoustic_Guitar2.mp3',
      Title: 'Reminisce',
      Price: 1900,
      Image: '/data/images/cover/City Of Stars.png',
      Likes: 30,
      Genre: ['어쿠스틱'],
      Mood: ['EMOTIONAL'],
      Instrument: ['기타'],
      Keyword: ['Fall', 'Guitar', 'Holiday']
    }
  },
  {
    Artist: {
      Name: 'Tuk',
    },
    Music: {
      Song: '/data/musics/Energetic_Easylistening_Brass.mp3',
      Title: 'Pirate Go To SEA',
      Price: 1900,
      Image: '/data/images/cover/City Of Stars.png',
      Likes: 90,
      Genre: ['이지리스닝'],
      Mood: ['ENERGETIC'],
      Instrument: ['관악기'],
      Keyword: ['Pirate', 'Powerful']
    }
  },
  {
    Artist: {
      Name: 'Tuk',
    },
    Music: {
      Song: '/data/musics/Energetic_Jazz_Keyboards.mp3',
      Title: 'Western Pub',
      Price: 1900,
      Image: '/data/images/cover/City Of Stars.png',
      Likes: 99,
      Genre: ['재즈'],
      Mood: ['ENERGETIC'],
      Instrument: ['키보드'],
      Keyword: ['Pub', 'Jazz']
    }
  },
  {
    Artist: {
      Name: 'LETSGO',
    },
    Music: {
      Song: '/data/musics/Energetic_Rock_Guitar.mp3',
      Title: 'The way to travel',
      Price: 1900,
      Image: '/data/images/cover/City Of Stars.png',
      Likes: 12,
      Genre: ['락'],
      Mood: ['ENERGETIC'],
      Instrument: ['기타'],
      Keyword: ['Travel', 'Car']
    }
  },
  {
    Artist: {
      Name: 'LETSGO',
    },
    Music: {
      Song: '/data/musics/Energetic_Soul_Brass.mp3',
      Title: 'Village Festival',
      Price: 1900,
      Image: '/data/images/cover/City Of Stars.png',
      Likes: 32,
      Genre: ['소울'],
      Mood: ['ENERGETIC'],
      Instrument: ['관악기'],
      Keyword: ['Festival', 'Jazz']
    }
  },
  {
    Artist: {
      Name: 'Cobra',
    },
    Music: {
      Song: '/data/musics/Fantasy_Worldmusic_String.mp3',
      Title: 'Egyptian street',
      Price: 1900,
      Image: '/data/images/cover/City Of Stars.png',
      Likes: 32,
      Genre: ['월드뮤직'],
      Mood: ['FANTASY'],
      Instrument: ['스트링'],
      Keyword: ['Egypt', 'Snake']
    }
  },
  {
    Artist: {
      Name: 'Cobra',
    },
    Music: {
      Song: '/data/musics/Fantasy_worldmusic_voice.mp3',
      Title: 'Civilization',
      Price: 1900,
      Image: '/data/images/cover/City Of Stars.png',
      Likes: 32,
      Genre: ['월드뮤직'],
      Mood: ['FANTASY'],
      Instrument: ['보이스'],
      Keyword: ['Civilization', 'World']
    }
  },
  {
    Artist: {
      Name: 'Third Steps from the Hell',
    },
    Music: {
      Song: '/data/musics/MAGNIFICIENT_CROSSOVER_CHOIR.mp3',
      Title: 'Just before the War',
      Price: 1900,
      Image: '/data/images/cover/City Of Stars.png',
      Likes: 32,
      Genre: ['크로스오버'],
      Mood: ['MAGNIFICIENT'],
      Instrument: ['보이스'],
      Keyword: ['War', 'Tension']
    }
  },
  {
    Artist: {
      Name: 'Third Steps from the Hell',
    },
    Music: {
      Song: '/data/musics/MAGNIFICIENT_CROSSOVER_CHOIR2.mp3',
      Title: 'Chaser',
      Price: 1900,
      Image: '/data/images/cover/City Of Stars.png',
      Likes: 32,
      Genre: ['크로스오버'],
      Mood: ['MAGNIFICIENT'],
      Instrument: ['보이스'],
      Keyword: ['Chase', 'Tension']
    }
  },
  {
    Artist: {
      Name: 'Child',
    },
    Music: {
      Song: '/data/musics/Tension_Crossover_String.mp3',
      Title: 'Haunted house',
      Price: 1900,
      Image: '/data/images/cover/City Of Stars.png',
      Likes: 32,
      Genre: ['크로스오버'],
      Mood: ['TENSION'],
      Instrument: ['스트링'],
      Keyword: ['Ghost', 'Fear']
    }
  },
  {
    Artist: {
      Name: 'Bertycox',
    },
    Music: {
      Song: '/data/musics/BertycoX - The Signal.mp3',
      Title: 'The signal',
      Price: 1900,
      Image: '/data/images/cover/City Of Stars.png',
      Likes: 32,
      Genre: ['일렉트로닉'],
      Mood: ['ENERGETIC', 'DANCY'],
      Instrument: ['신스'],
      Keyword: ['God', 'Good']
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

    var categoryNameParameter = this.props.params.categoryName;
    if (categoryNameParameter === undefined || categoryNameParameter === null) {
      this.state = {
        searchKeywords: []
      }
    } else {
      this.state = {
        searchKeywords: [].concat((this.props.params.categoryName))
      }
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
      filteredList = this.filterKeyword(userSearchKeywords),
      lowerCaseUserKeywords = userSearchKeywords.map((i) => i.toLowerCase());


    return (
      <div className="my-search-sound-page">
        <NaviBar />
        <SearchBar
          style={searchBarCSS}
          onUserInput={this.handleUserInput}
          category={category}
          musicData={musicDataSamples}
          searchKeywords={lowerCaseUserKeywords}
        />
        <SearchKeywordBoard
          style={searchKeywordBoardCSS}
          searchKeywords={userSearchKeywords}
          onUserDelete={this.handleUserDelete}
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <SearchGuideBoard
                style={searchGuideBoardCSS}
                onUserInput={this.handleUserInput}
                onUserDelete={this.handleUserDelete}
                searchKeywords={lowerCaseUserKeywords}
                category={category}
              />
            </div>
            <div className="col-md-10">
              <SearchResultBoard
                filteredList={filteredList}
                style={searchResultBoardCSS}
                searchKeywords={lowerCaseUserKeywords}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SearchSound;