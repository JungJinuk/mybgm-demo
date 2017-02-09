import React, { Component, PropTypes } from 'react';
import Pannel from './Pannel';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="container-fluid text-center">
          <Pannel />
          <Pannel />
          <Pannel />
          <div className="">
            
          </div>
        </footer>
      </div>
    );
  }
}

Footer.propTypes = {

};

export default Footer;