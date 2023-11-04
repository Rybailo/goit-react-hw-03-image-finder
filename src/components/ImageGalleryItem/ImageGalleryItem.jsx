import Loader from 'components/Loader/Loader';
import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    return (
      <div className={css.ImageGallery}>
        {this.props.itemLoader && <Loader />}
        {this.props.itemImage &&
          this.props.itemImage.hits &&
          this.props.itemImage.hits.map(image => (
            <li
              key={image.id}
              className={`${css.galleryItem}, ${css.ImageGalleryItemImage}`}
            >
              <img src={image.webformatURL} alt={image.tags} />
            </li>
          ))}
      </div>
    );
  }
}
