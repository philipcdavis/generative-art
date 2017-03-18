import React, { Component } from 'react';
import styled from 'styled-components';
import GalleryItem from './GalleryItem';
import Link from './Link';

export default class Gallery extends Component {
  render() {
    return (
      <div className="max-width-3">
        <GalleryItem  src="img/static-circles.gif" />

        <GalleryItem  src="https://learningd3.com/blog/assets/img/posts/generative-art/ring-of-bars.gif" />

        <GalleryItem  src="https://learningd3.com/blog/assets/img/posts/generative-art/circle-tunnel.gif" />

        <GalleryItem  src="https://learningd3.com/blog/assets/img/posts/generative-art/static.gif" />

        <GalleryItem  src="https://learningd3.com/blog/assets/img/posts/generative-art/moire.jpg" />
        
      </div>
    );
  }
}
