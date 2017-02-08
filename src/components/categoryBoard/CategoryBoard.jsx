import React, { Component, PropTypes } from 'react';
import Category from './Category';
import CategoryNavi from './CategoryNavi';

let categories = [
  {Kind: "Genres", Child: ["Pop", "Rock", "Electronic"]},
  {Kind: "Moods", Child: ["Happy", "Energetic", "Sad"]},
  {Kind: "Instruments", Child: ["Popular", "Electronic", "wind"]}
];

  // {
  //   Genres: 
  //   {
  //     Pop: ["Electropop", "Pop Folk", "Pop Rock", "Synthpop"],
  //     Rock: ["Alternative", "Progressive", "Punk", "Rock 'n' Roll"],
  //     Electronic: ["Breakbeat", "Club", "Dubstep", "EBM"]
  //   }, 
  // },
  // {
  //   Moods: 
  //   {
  //     Happy: ["Holiday", "Inspiring", "Motivational", "Uplifting"],
  //     Energetic: ["Bouncy", "Crazy", "Epic", "Fashion"],
  //     Sad: ["Dark", "Dramatic", "Emotion", "Melancholy"]
  //   }, 
  // },
  // {
  //   Instruments:
  //   {
  //     Popular: ["Acoustic guitar", "Drum", "Piano", "Keyboard"],
  //     Electronic: ["Computer", "Bass", "Electric guitar", "Sampler"],
  //     Wind: ["Clarinet", "Flute", "Horn", "Tuba"]
  //   }
  // }

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
      <div>
        <div>
          {categoryNavigaion}
        </div>
        <div>
          <ul>
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