import React, { Component, PropTypes } from 'react'
import MainPage from '../containers/mainPage/MainPage'
import NaviBar from '../components/NaviBar';
import Footer from '../components/Footer';
import navcss from '../components/categoryBoard/CategoryNav.css';
import footcss from '../containers/MainPage/footer.css';

class App extends Component {
  render() {
    return (
      <div>
        <NaviBar style={navcss}/>
        <MainPage />
        <Footer style={footcss}/>
      </div>
    )
  }
}

App.propTypes = {

}

export default App