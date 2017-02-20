import React, { Component, PropTypes } from 'react';
import RecommendTheme from './RecommendTheme';

let recommendThemeSample = [
  {
    Image: "/images/theme/advertisement.jpg",
    theme: "보이스"
  },
  {
    Image: "/images/theme/backtoschool.jpg",
    theme: "SEASON"
  },
  {
    Image: "/images/theme/calm.jpg",
    theme: "SENTIMENTAL"
  },
  {
    Image: "/images/theme/christmas.jpg",
    theme: "EMOTIONAL"
  },
  {
    Image: "/images/theme/energetic.jpg",
    theme: "ENERGETIC"
  },
  {
    Image: "/images/theme/happy.jpg",
    theme: "BRIGHT"
  },
  {
    Image: "/images/theme/love.jpg",
    theme: "키보드"
  },
  {
    Image: "/images/theme/romantic.jpg",
    theme: "월드뮤직"
  },
  {
    Image: "/images/theme/sad.jpg",
    theme: "SAD"
  },
  {
    Image: "/images/theme/scare.jpg",
    theme: "TENSION"
  },
  {
    Image: "/images/theme/sport.jpg",
    theme: "POWERFUL"
  },
  {
    Image: "/images/theme/success.jpg",
    theme: "MAGNIFICIENT"
  },
]

class RecommendThemeBoard extends Component {
  render() {

    const recommendThemes = recommendThemeSample.map((theme, index) => {
      return (
        <RecommendTheme
          img={theme.Image}
          themeName={theme.theme}
          key={index}
        />
      );
    });

    return (
      <div className="container">
        <h2>추천 테마</h2>
        <hr />
        <div className="row">
          {recommendThemes}
        </div>
      </div>
    );
  }
}

RecommendThemeBoard.propTypes = {

};

export default RecommendThemeBoard;