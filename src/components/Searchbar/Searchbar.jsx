import React, { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    name: '',
  };
  handleSubmit = event => {
    event.preventDefault();
    const name = event.currentTarget.querySelector('input').value;
    const imageName = { name };
    this.props.handleFilterChange(imageName);
    event.currentTarget.reset();
  };
  render() {
    return (
      <header className={css.Searchbar}>
        <form onSubmit={this.handleSubmit} className={css.SearchForm}>
          <button type="onSubmit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            name="name"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
