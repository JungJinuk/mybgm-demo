import React, { Component, PropTypes } from 'react'
import SearchBoard from '../../components/searchBar/SearchBoard'
import CategoryBoard from '../../components/categoryBoard/CategoryBoard';
import css from '../../style_main.css';


class MainPage extends Component {
  render() {
    return (
      <div>
        <SearchBoard style={css}/>
        <CategoryBoard />
      </div>
    )
  }
}

MainPage.propTypes = {

}

export default MainPage