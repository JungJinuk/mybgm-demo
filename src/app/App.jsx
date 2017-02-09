import React, { Component, PropTypes } from 'react'
import MainPage from '../containers/mainPage/MainPage'
import NaviBar from '../components/NaviBar';
import DetailPage from './DetailPage';
import SearchPage from './SearchPage';

import Footer from '../components/Footer';
import navcss from '../components/categoryBoard/CategoryNav.css';
import footcss from '../containers/MainPage/footer.css';

import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NaviBar />
          <Route exact path="/" component={MainPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/detail" component={DetailPage} />
          <Footer />
        </div>
      </Router>
    )
  }
}

App.propTypes = {

}

export default App