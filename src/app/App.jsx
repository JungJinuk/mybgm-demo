import React, { Component, PropTypes } from 'react'
import MainPage from '../containers/mainPage/MainPage'
import NaviBar from '../components/NaviBar';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <NaviBar />
        <MainPage />
        <Footer />
      </div>
    )
  }
}

App.propTypes = {

}

export default App