import React, { Component, PropTypes } from 'react';
import Pannel from './Pannel';

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
            </div>
          </div>
          <div classId="company" className="">
            Company
          </div>
        </footer>
      </div>
    );
  }
}

Footer.propTypes = {

};

export default Footer;