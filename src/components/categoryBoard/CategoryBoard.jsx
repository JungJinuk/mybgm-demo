import React, { Component, PropTypes } from 'react';
import Category from './Category';
import CategoryNavi from './CategoryNavi';

let categories = [
  { Kind: "Genres", Child: ["Pop", "Rock", "Electronic"] },
  { Kind: "Moods", Child: ["Happy", "Energetic", "Sad"] },
  { Kind: "Instruments", Child: ["Popular", "Electronic", "wind"] }
];

class CategoryBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(selectedIndex) {
    this.setState({
      selectedIndex: selectedIndex
    });
  }

  render() {

    let selectedIndex = this.state.selectedIndex;

    const categoryDetail = categories[selectedIndex].Child.map((element, index) => {
      return (
        <Category
          element={element}
          key={index} />
      );
    });

    const categoryNavigaion = categories.map((category, index) => {
      return (
        <CategoryNavi
          selected={selectedIndex}
          onClick={() => this.handleClick(index)}
          category={category}
          id={index}
          key={index} />
      );
    });

    return (
      <div className="container-fluid">
        <div className="col-xs-6 col-xs-offset-3">
          <div className="col-md-9 col-md-offset-3">
            <ul className="nav nav-pills">
              {categoryNavigaion}
            </ul>
          </div>
        </div>
        <div className="col-xs-6 col-xs-offset-3">
          <ul className="list-group">
            {categoryDetail}
          </ul>
        </div>
      </div>
    );
  }
}

export default CategoryBoard;
