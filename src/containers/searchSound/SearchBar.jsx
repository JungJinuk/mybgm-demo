import React, { Component, PropTypes } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div classID="search-input">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <input 
                type="text" 
                placeholder="What are you looking for? (ex: happy, rock, nature...)"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {

};

export default SearchBar;