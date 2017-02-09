import React, { Component, PropTypes } from 'react'
import MainPage from '../containers/mainPage/MainPage'
import NaviBar from '../components/NaviBar';

class App extends Component {
  render() {
    return (
      <div>
        <NaviBar />
        <MainPage />
      </div>
    )
  }
}

App.propTypes = {

}

export default App