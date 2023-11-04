import React, { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  render() {
    return (
      <div>
        <ul>
          <ImageGalleryItem itemImage={this.props.itemImage} />
        </ul>
      </div>
    );
  }
}
