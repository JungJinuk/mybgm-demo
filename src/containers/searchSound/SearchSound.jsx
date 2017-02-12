import React, { Component, PropTypes } from 'react';
import NaviBar from '../../components/NaviBar/NaviBar';
import Footer from '../../components/Footer/Footer';

class SearchSound extends Component {
  render() {
    return (
      <div>
        <NaviBar/>
        <h1>SearchSound</h1>
        <Footer/>
      </div>
    );
  }
}

export default SearchSound;
