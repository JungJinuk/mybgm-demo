import React, { Component, PropTypes } from 'react';
import style from './media.css';

class AuthorProfile extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    let media = this.props.media;
    return (
      <div className="media">
        <div className="media-left media-middle">
          <a href="#">
            <img className="media-object thumbnail" src={media.img} alt="" />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{media.head}</h4>
          {media.content}
        </div>
      </div>
    );
  }
}

export default AuthorProfile;
