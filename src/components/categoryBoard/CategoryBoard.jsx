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

    const categoryDetail = categories[this.state.selectedIndex].Child.map((element, index) => {
      return (
        <Category
          element={element}
          key={index} />
      );
    });

    const categoryNavigaion = categories.map((category, index) => {
      return (
        <CategoryNavi
          onClick={() => this.handleClick(index)}
          key={index}
          kind={category}
        />
      )
    });

    return (
      <div className="container-fluid">
        <div className="col-xs-6 col-xs-offset-3">
          <ul className="nav nav-pills nav-justified">
            {categoryNavigaion}
          </ul>
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

CategoryBoard.propTypes = {

};

export default CategoryBoard;