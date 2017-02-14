import React, { Component, PropTypes } from 'react';
import MediaItem from './MediaItem';

const medias = [
  {img: '/images/media/me_1.jpg', head: 'test1', content: 'content1'},
  {img: '/images/media/me_2.jpg', head: 'test2', content: 'content2'},
  {img: '/images/media/me_3.jpg', head: 'test3', content: 'content3'},
  {img: '/images/media/me_4.jpg', head: 'test4', content: 'content4'},
];

class MediaList extends Component {
  render() {
    const mediaList = medias.map((media, i) => {
      return (
        <MediaItem
          key={i}
          media= {media}
        />
      )
    });
    return (
      <div>
        {mediaList}
      </div>
    );
  }
}

export default MediaList;
