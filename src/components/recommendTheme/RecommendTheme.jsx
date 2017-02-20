import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class RecommendTheme extends Component {
  render() {
    return (
      <div className="col-md-2">
        <Link to={`sound/search/${themeName}`}>
          <img src="" alt="" />
        </Link>
      </div>
    );
  }
}

RecommendTheme.propTypes = {

};

export default RecommendTheme;