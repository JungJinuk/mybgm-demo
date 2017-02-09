import React, { Component, PropTypes } from 'react'
import SearchBoard from '../../components/searchBar/SearchBoard'
import CategoryBoard from '../../components/categoryBoard/CategoryBoard';
import BestSellerBoard from '../../components/bestSellerBoard/BestSellerBoard'
import css from './main.css';


class MainPage extends Component {
  render() {
    return (
      <div>
        <SearchBoard style={css}/>
        <CategoryBoard />
        <BestSellerBoard/>
      </div>
    )
  }
}

MainPage.propTypes = {

}

export default MainPage