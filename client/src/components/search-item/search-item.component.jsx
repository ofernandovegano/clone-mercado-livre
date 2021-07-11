import React from 'react';

import SearchItemBody from '../search-item-body/search-item-body.component';

import './search-item.styles.scss';

const SearchItem = ({item}) => (
  <div className="item">
    <SearchItemBody item={item} />
    <hr />
  </div>
);

export default SearchItem