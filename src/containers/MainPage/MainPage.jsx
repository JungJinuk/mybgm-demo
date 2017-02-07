import React, { Component, PropTypes } from 'react'
import SearchBoard from '../../components/searchBar/SearchBoard'
import mainCSS from '../../style_main.css'

class MainPage extends Component {
  render() {
    return (
      <div>
        <SearchBoard style={mainCSS}/>
      </div>
    )
  }
}

MainPage.propTypes = {

}

export default MainPage