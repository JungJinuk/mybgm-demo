import React, { Component, PropTypes } from 'react'
import Main from '../containers/main/Main'
import SoundDetail from '../containers/soundDetail/SoundDetail';
import SearchSound from '../containers/searchSound/SearchSound';

import navcss from '../components/categoryBoard/CategoryNav.css';
import footcss from '../containers/main/footer.css';

import {Router, Route, hashHistory} from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={Main} />
          <Route path="sound/search" component={SearchSound} />
          <Route path="sound/detail" component={SoundDetail} />
        </Router>
      </div>

    );
  }
}

export default App;
