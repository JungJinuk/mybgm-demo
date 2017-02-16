import React, { Component, PropTypes } from 'react';
import MusicElement from './MusicElement';
import MusicListCSS from '../../components/bestSellerBoard/musicList.css';

class SearchResultBoard extends Component {

  render() {
    var filteredMusics = this.props.filteredList.map((music, index) => {
      return (
        <MusicElement
          key={index}
          music={music}
          style={MusicListCSS}
        />
      );
    });
    return (
      <div className="my-result">
        {filteredMusics}
      </div>
    );
  }
}

SearchResultBoard.propTypes = {
  filteredList: PropTypes.arrayOf(PropTypes.object)
};

export default SearchResultBoard;