import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import recommendThemeBoardCSS from './recommendThemeBoard.css';

class RecommendTheme extends Component {
  render() {
    var themeName = this.props.themeName;
    return (
      <div className="col-md-2 main-theme-wrapper">
      <span className="theme-name"><b>{themeName}</b></span>
        <Link to={`sound/search/${themeName}`}>
          <img className="theme-cover" src={this.props.img} />
        </Link>
      </div>
    );
  }
}

RecommendTheme.propTypes = {
  img: PropTypes.string,
  themeName: PropTypes.string
};

export default RecommendTheme;