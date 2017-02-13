import React, { Component, PropTypes } from 'react';


class SearchResultBoard extends Component {
  constructor(props) {
    super(props);
    
  }

  

  render() {
    return (
      <div>

      </div>
    );
  }
}

SearchResultBoard.propTypes = {
  searchKeywords: PropTypes.arrayOf(PropTypes.string),
  musicDataSamples: PropTypes.arrayOf(PropTypes.object)
};

export default SearchResultBoard;