import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class MainSearchBoard extends Component {
  constructor(props) {
    super(props);

    this.onClickSearchBar = this.onClickSearchBar.bind(this);
  }

  onClickSearchBar() {

  }

  render() {
    const ment = "미디어 영상 제작을 위한 다양한 아티스트들의 저작권 무료 배경음악";

    return (
      <div className="jumbotron text-center">
        <h1>저작권 무료 배경음악</h1><br />
        <h4>{ment}</h4><br />
        <div className="container">
          <div className="row">
            <form className="form-inline">
              <div className="input-group">
                <Link to="/sound/search">
                  <input
                    className="form-control"
                    type="text"
                    size="150"
                    onClick={this.onClickSearchBar}
                    placeholder="What are you looking for? (ex: happy, rock, nature...)"
                  />
                </Link>
                <span className="input-group-btn">
                  <Link to="/sound/search">
                    <button className="btn btn-info">search</button>
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default MainSearchBoard;
