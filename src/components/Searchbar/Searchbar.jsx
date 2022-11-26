import { useState } from 'react';
import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const onInputChange = event => {
    setSearchValue(event.target.value);
  };

  const onFormSubmit = event => {
    event.preventDefault();

    onSubmit(event.target.input.value);

    resetForm();
  };

  const resetForm = () => {
    setSearchValue('');
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={onFormSubmit}>
        <button type="submit" className={css.SearchButton}>
          <span className={css.SearchButtonLabel}>Search</span>
        </button>

        <input
          onChange={onInputChange}
          value={searchValue}
          name="input"
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
