import React, { Component, PropTypes } from 'react'

class MainSearchBoard extends Component {
  constructor(props) {
    super(props)

    this.onClickSearchBar = this.onClickSearchBar.bind(this);
  }

  onClickSearchBar() {
    alert("You go to Search Page");
  }

  render() {

    return (
        <div className="jumbotron text-center">
          <h1>저작권 무료 배경음악</h1><br/>
          <h4>미디어 영상 제작을 위한 다양한 아티스트들의 저작권 무료 배경음악</h4><br/>
          <form className="form-inline">
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                size="150"
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