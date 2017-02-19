import React, { Component, PropTypes } from 'react';
import Pannel from '../Pannel';
import SNS from '../sns/SNS';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="container-fluid text-center">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <SNS />
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
