import React, { Component, PropTypes } from 'react';
import AutoComplete from './AutoComplete';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      autoCompleteList: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.autoComplete = this.autoComplete.bind(this);
    this.resetInputText = this.resetInputText.bind(this);
  }

  componentDidMount() {
    this.userInput.focus();
  }

  handleChange(e) {
    this.setState({
      searchText: e.target.value,
      autoCompleteList: e.target.value ? this.autoComplete() : []
    });
  }

  resetInputText(searchText) {
    if (!(searchText.trim() === "" || this.props.searchKeywords.includes(searchText))) {
      this.props.onUserInput(searchText);
    }

    this.setState({
      searchText: '',
      autoCompleteList: []
    });
  }

  handleSubmit(e) {
    this.resetInputText(this.state.searchText);
    e.preventDefault();
  }

  autoComplete() {
    var musicData = this.props.musicData,
      category = this.props.category,
      combinedKeyword = [],
      uniqKeywords = [];

    musicData.forEach((music, index) => {
      var musicObj = music.Music;

      combinedKeyword = combinedKeyword.concat(
        music.Artist.Name,
        musicObj.Genre,
        musicObj.Mood,
        musicObj.Instrument,
        musicObj.Keyword,
        musicObj.Title
      );
    });

    uniqKeywords = [...new Set(combinedKeyword)].map((keyword) => keyword.toLowerCase()).sort();
    return uniqKeywords.filter((keyword) => { return keyword.indexOf(this.state.searchText) > -1; });
  }

  render() {
    return (
      <div className="search-input">
        <div className="container">
          <div className="row">
            <form onSubmit={this.handleSubmit}>
              <div className="input-group">
                <input
                  ref={(input) => { this.userInput = input; }}
                  className="form-control"
                  type="text"
                  placeholder="What are you looking for? (ex: happy, rock, nature...)"
                  onChange={this.handleChange}
                  value={this.state.searchText}
                />
                <span className="input-group-btn">
                  <button className="btn btn-default">
                    <span className="glyphicon glyphicon-search"></span>
                  </button>
                </span>
              </div>
              <AutoComplete
                autoCompleteArray={this.state.autoCompleteList}
                resetInputText={this.resetInputText}
                inputText={this.state.searchText}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onUserInput: PropTypes.func,
  category: PropTypes.object,
  musicData: PropTypes.arrayOf(PropTypes.object),
  searchKeywords: PropTypes.arrayOf(PropTypes.string)
};

export default SearchBar;