import React from 'react';

import SearchItemBody from '../search-item-body/search-item-body.component';

import './search-item.styles.scss';

const SearchItem = () => (
  <div className="item">
    <SearchItemBody />
    <hr />
  </div>
);

export default SearchItem