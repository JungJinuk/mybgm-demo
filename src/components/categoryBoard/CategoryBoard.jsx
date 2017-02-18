import React, { Component, PropTypes } from 'react';
import CategoryTabContent from './CategoryTabContent';
import CategoryTab from './CategoryTab';


let category = {
  Genre: ['이지리스닝', '재즈', '락', '댄스', '팝', '소울', '힙합', '클래식', '어쿠스틱', '월드뮤직',
    '일렉트로닉', '코믹&키즈', '종교음악', '크로스오버', '효과음'],
  Moods: ['BRIGHT', 'ENERGETIC', 'EMOTIONAL', 'DRAMA', 'FRESH', 'FUN', 'SAD', 'SENTIMENTAL',
    'TENSION', 'MYSTERY', 'FANTASY', 'SEXY', 'POWERFUL', 'MAGNIFICIENT', 'CHIC', 'SEASON', 'DANCY'],
  Instrument: ['키보드', '기타', '스트링', '관악기', '오케스트라',
    '타악기', '보이스', '신스', '국악', '전통악기']
};

class CategoryBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0
    };

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(selectedIndex) {
    this.setState({
      selectedIndex: selectedIndex
    });
  }

  render() {
    var selectedIndex = this.state.selectedIndex;
    var categories = Object.keys(category);

    const categoryTabs = categories.map((category, index) => {
      return (
        <CategoryTab
          selected={selectedIndex}
          onClick={() => this.handleTabClick(index)}
          category={category}
          id={index}
          key={index} />
      );
    });

    const categoryContent = category[categories[selectedIndex]].map((element, index) => {
      return (
        <CategoryTabContent
          element={element}
          key={index} />
      );
    });

    return (
      <div className="container my-categoryboard">
        <div className="row">
          <div className="col-md-offset-2 col-md-8">
            <ul className="nav nav-pills nav-justified">
              {categoryTabs}
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          {categoryContent}
        </div>
      </div>
    );
  }
}

export default CategoryBoard;
