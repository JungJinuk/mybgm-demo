import React, { Component, PropTypes } from 'react'
import MainSearchBoard from './MainSearchBoard'
import mainCSS from '../../public/style_main.css'

class MainPage extends Component {
  render() {
    return (
      <div>
        <MainSearchBoard style={mainCSS}/>
      </div>
    )
  }
}

MainPage.propTypes = {

}

export default MainPage