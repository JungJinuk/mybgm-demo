import React, { Component, PropTypes } from 'react'

class MainSearchBoard extends Component {
  constructor(props) {
    super(props);
    
    this.onChange = this.onChange.bind(this)
  }

  onChange(){
    
  }
  
  render() {
    return (
      <div className="main">
        <h2>저작권 무료 배경음악</h2>
        <h4>미디어 영상 제작을 위한 다양한 아티스트들의 저작권 무료 배경음악</h4>
        <input 
          className="search"
          type="text" 
          value=""
          onChange=""
          placeholder="What are you looking for? (ex: happy, rock, nature...)"
        />
      </div>
    )
0  }
}

MainSearchBoard.propTypes = {

}

export default MainSearchBoard