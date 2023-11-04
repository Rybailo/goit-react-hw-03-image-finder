import React, { Component } from 'react';
import axios from 'axios';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

/* {
            "id": 2295434,
            "pageURL": "https://pixabay.com/photos/spring-bird-bird-tit-spring-blue-2295434/",
            "type": "photo",
            "tags": "spring bird, bird, tit",
            "previewURL": "https://cdn.pixabay.com/photo/2017/05/08/13/15/spring-bird-2295434_150.jpg",
            "previewWidth": 150,
            "previewHeight": 99,
            "webformatURL": "https://pixabay.com/get/g17ad5643d7ae1680d2e549cc733cf43cf0c31f2ea52be21cafb4cbac5517e30656976225a38834d1bf53a2d6f7406b509c8280e54b106f130bf022b5715861d8_640.jpg",
            "webformatWidth": 640,
            "webformatHeight": 426,
            "largeImageURL": "https://pixabay.com/get/gf962793567453b8138ff843338345e467e96b0d47fcce956ac2f833edbff6f29c1b4debb059285e1d45d97cfb696731daa698a1bdf0b4c7482f75af699ec54cf_1280.jpg",
            "imageWidth": 5363,
            "imageHeight": 3575,
            "imageSize": 2938651,
            "views": 838563,
            "downloads": 502637,
            "collections": 2348,
            "likes": 2267,
            "comments": 292,
            "user_id": 334088,
            "user": "JillWellington",
            "userImageURL": "https://cdn.pixabay.com/user/2018/06/27/01-23-02-27_250x250.jpg"
        } */
export class App extends Component {
  state = {
    images: null,
    isLoading: false,
    error: null,
    filter: '',
  };

  fetchImages = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      const { data } = await axios.get(
        'https://pixabay.com/api/?key=40436397-1bcf8ed18e7ed154883cb3f4c&q=yellow+flowers&image_type=photo&pretty=true'
      );
      this.setState({ images: data });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  componentDidMount() {
    this.fetchImages();
  }

  handleFilterChange = imageName => {
    const { images } = this.state;
    const value = imageName.name.toLowerCase();
    if (images && images.tags) {
      const findTag = this.state.tags.images.find(tag => tag.name === value);
      this.setState({
        filter: findTag,
      });
    }
  };

  render() {
    const filteredImages = this.state.filter;
    return (
      <div
        style={{
          height: '100vh',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar
          name={this.state.images}
          handleFilterChange={this.handleFilterChange}
        />
        <ImageGallery itemImage={this.state.images} />
        <ImageGalleryItem
          itemLoader={this.state.isLoading}
          filteredImages={this.filteredImages}
        />
        {/*<Button />
     
      <Modal /> */}
      </div>
    );
  }
}
