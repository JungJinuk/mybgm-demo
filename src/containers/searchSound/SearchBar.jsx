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

  render() {
    return (
      <div className="search-input">
        <div className="container">
          <div className="row">
            <form onSubmit={this.handleSubmit}>
              <div className="input-group">
                <input
                  classID="search-input"
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
            </form>
          </div>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onUserInput: PropTypes.func
};

export default SearchBar;