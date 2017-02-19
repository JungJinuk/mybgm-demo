import React, { Component, PropTypes } from 'react';

class AutoComplete extends Component {
  constructor(props) {
    super(props);
    
    this.handleUserAutoCompleteClick = this.handleUserAutoCompleteClick.bind(this);
  }

  handleUserAutoCompleteClick(keyword) {
    this.props.resetInputText(keyword);
  }
  
  render() {
    const autoCompleteList = this.props.autoCompleteArray.map((keyword, index) => {
      return (
        <a
          onClick={() => this.handleUserAutoCompleteClick(keyword)}
          key={index}
          className="list-group-item"
        >{keyword}</a>
      );
    });

    return (
      <div className="list-group autocomplete">
        {autoCompleteList}
      </div>
    );
  }
}

AutoComplete.propTypes = {
  autoCompleteArray: PropTypes.arrayOf(PropTypes.string),
  resetInputText: PropTypes.func,
  inputText: PropTypes.string
};

export default AutoComplete;