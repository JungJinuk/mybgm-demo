import React, { Component, PropTypes } from 'react'
import Main from '../containers/main/Main'
import NaviBar from '../components/NaviBar/NaviBar';
import SoundDetail from '../containers/soundDetail/SoundDetail';
import SearchSound from '../containers/searchSound/SearchSound';

import Footer from '../components/Footer/Footer';
import navcss from '../components/categoryBoard/CategoryNav.css';
import footcss from '../containers/main/footer.css';

import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NaviBar />
          <Route exact path="/" component={Main} />
          <Route path="/sound/search" component={SearchSound} />
          <Route path="/sound/detail" component={SoundDetail} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
