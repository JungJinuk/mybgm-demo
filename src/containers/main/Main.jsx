import React, { Component, PropTypes } from 'react';
import NaviBar from '../../components/NaviBar/NaviBar';
import Footer from '../../components/Footer/Footer';
import SearchBoard from '../../components/searchBar/SearchBoard';
import CategoryBoard from '../../components/categoryBoard/CategoryBoard';
import BestSellerBoard from '../../components/bestSellerBoard/BestSellerBoard';
import css from './main.css';
import categoryboardCSS from '../../components/categoryBoard/categoryboard.css';

class MainPage extends Component {
  render() {
    return (
      <div className="my-main-page">
        <NaviBar/>
        <SearchBoard style={css}/>
        <BestSellerBoard/>
        <CategoryBoard style={categoryboardCSS}/>
        <Footer/>
      </div>
    );
  }
}

export default MainPage
