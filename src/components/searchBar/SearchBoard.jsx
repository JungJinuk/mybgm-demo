import React, { Component, PropTypes } from 'react'

class MainSearchBoard extends Component {
  constructor(props) {
    super(props)

    this.onClickSearchBar = this.onClickSearchBar.bind(this);
  }

  onClickSearchBar() {
    // action go to page "Search"
  }

  render() {
    return (
      <div className="jumbotron text-center">
        <h2>저작권 무료 배경음악</h2>
        <h4>미디어 영상 제작을 위한 다양한 아티스트들의 저작권 무료 배경음악</h4>
        <form className="form-inline">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              size="70"
              onClick={this.onClickSearchBar}
              placeholder="What are you looking for? (ex: happy, rock, nature...)"
            />
            <div className="input-group-btn">
              <button type="button" className="btn btn-info">search</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

MainSearchBoard.propTypes = {

}

export default MainSearchBoard