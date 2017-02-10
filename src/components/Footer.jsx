import React, { Component, PropTypes } from 'react';
import Pannel from './Pannel';
import SNS from './SNS';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="container-fluid text-center">
          <div className="row">
            <div className="col-lg-6 col-lg-offset-3">
              <Pannel />
              <Pannel />
              <Pannel />
              <SNS />
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

Footer.propTypes = {

};

export default Footer;