import React, { Component, PropTypes } from 'react';


class SearchResultBoard extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    const filteredMusics = this.props.filteredList.map((music, index) => {
      return (
        <li key={index}>{music.Music.Title}</li>
      )
    });
    return (
      <div>
        {filteredMusics}
      </div>
    );
  }
}

SearchResultBoard.propTypes = {
  filteredList: PropTypes.objectOf(PropTypes.object)
};

export default SearchResultBoard;