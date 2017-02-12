import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

class MainSearchBoard extends Component {
  constructor(props) {
    super(props);

    this.onClickSearchBar = this.onClickSearchBar.bind(this);
  }

  onClickSearchBar() {

  }

  render() {

    return (
      <div className="jumbotron text-center">
        <h1>저작권 무료 배경음악</h1><br />
        <h4>미디어 영상 제작을 위한 다양한 아티스트들의 저작권 무료 배경음악</h4><br />
        <form className="form-inline">
          <div className="input-group">
            <Link to="/search">
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
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default MainSearchBoard;
