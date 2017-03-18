import React, { Component } from 'react';
import styled from 'styled-components';
import GalleryItem from './GalleryItem';
import Link from './Link';

export default class Gallery extends Component {
  render() {
    return (
      <div className="max-width-2">
        <GalleryItem  src="img/static-circles.gif" />
        <div className="mb4">Pupil</div>

        <GalleryItem  src="https://learningd3.com/blog/assets/img/posts/generative-art/ring-of-bars.gif" />
        <div className="mb4">Ring of Bars</div>

        <GalleryItem  src="https://learningd3.com/blog/assets/img/posts/generative-art/circle-tunnel.gif" />
        <div className="mb4">Circle Tunnel</div>

        <GalleryItem  src="https://learningd3.com/blog/assets/img/posts/generative-art/static.gif" />
        <div className="mb4">Static Lines</div>

        <GalleryItem  src="https://learningd3.com/blog/assets/img/posts/generative-art/moire.jpg" />
        <div className="mb4">Moire</div>

      </div>
    );
  }
}
