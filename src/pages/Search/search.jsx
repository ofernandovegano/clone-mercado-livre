import React from 'react';

import SearchItem from '../../components/search-item/search-item.component'

import './search.styles.scss';

const Search = () => (
  <div className="search-page">
    <div className="items">
      <SearchItem />
      <SearchItem />
      <SearchItem />
      <SearchItem />
    </div>
  </div>
);

export default Search;