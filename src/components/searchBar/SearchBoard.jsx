import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class MainSearchBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const mainMent = "미디어 영상 제작을 위한 다양한 아티스트들의 저작권 무료 배경음악";

    return (
      <div className="main-input">
        <div className="container">
          <div className="my-display-middle my-text-white my-center">
            <h1 className="my-jumbo">저작권 무료 배경음악</h1><br/>
            <h3>{mainMent}</h3>
          </div>
          <div className="row">
            <form>
              <div className="input-group">
                <Link to="/sound/search">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="What are you looking for? (ex: happy, rock, nature...)"
                  />
                </Link>
                <span className="input-group-btn">
                  <Link to="/sound/search">
                    <button className="btn btn-info">
                      Search
                  </button>
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
