import React, { Component, PropTypes } from 'react'
import SearchBoard from '../../components/searchBar/SearchBoard'
import mainCSS from '../../style_main.css'
import CategoryBoard from '../../components/categoryBoard/CategoryBoard';

class MainPage extends Component {
  render() {
    return (
      <div>
        <SearchBoard style={mainCSS}/>
        <CategoryBoard />
      </div>
    )
  }
}

MainPage.propTypes = {

}

export default MainPage