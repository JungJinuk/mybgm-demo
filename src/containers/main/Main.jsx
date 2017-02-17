import React, { Component, PropTypes } from 'react';
import NaviBar from '../../components/NaviBar/NaviBar';
import Footer from '../../components/Footer/Footer';
import SearchBoard from '../../components/searchBar/SearchBoard';
import CategoryBoard from '../../components/categoryBoard/CategoryBoard';
import BestSellerBoard from '../../components/bestSellerBoard/BestSellerBoard';
import css from './main.css';

class MainPage extends Component {
  render() {
    return (
      <div className="my-main-page">
        <NaviBar/>
        <SearchBoard style={css}/>
        <CategoryBoard />
        <BestSellerBoard/>
        <Footer/>
      </div>
    );
  }
}

export default MainPage
