import React, { Component, PropTypes } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    //console.log(autoComplete);
    this.setState({
      searchText: e.target.value
    });
  }

  handleSubmit(e) {
    var searchText = this.state.searchText;
    e.preventDefault();
    if (searchText.trim() === "") return;
    this.props.onUserInput(searchText);
    this.setState({
      searchText: ''
    });
  }

  autoComplete() {
    var musicData = this.props.musicData,
      category = this.props.category,
      combinedKeyword = [];

    musicData.forEach((music, index) => {
      var musicObj = music.Music;

      combinedKeyword.concat(
        music.Artist.Name,
        musicObj.Genre,
        musicObj.Mood,
        musicObj.Instrument,
        musicObj.Keyword,
        musicObj.Title
      );
    });

    



  }

  render() {
    return (
      <div className="search-input">
        <div className="container">
          <div className="row">
            <form onSubmit={this.handleSubmit}>
              <div className="input-group">
                <input
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
              <div className="list-group autocomplete">
                <a href="#" className="list-group-item">Cras justo odio</a>
                <a href="#" className="list-group-item">Dapibus ac facilisis in</a>
                <a href="#" className="list-group-item">Morbi leo risus</a>
                <a href="#" className="list-group-item">Porta ac consectetur ac</a>
                <a href="#" className="list-group-item">Vestibulum at eros</a>
              </div>
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
  musicData: PropTypes.arrayOf(PropTypes.object)
};

export default SearchBar;