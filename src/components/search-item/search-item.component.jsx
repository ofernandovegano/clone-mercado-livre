import React from 'react';

import WithSpinner from '../with-spinner/with-spinner.component';

import SearchItemBody from '../search-item-body/search-item-body.component';

import './search-item.styles.scss';

const SearchItem = ({item}) => (
  <div className="search-item">
    <SearchItemBody item={item} />
    <hr />
  </div>
);

export default WithSpinner(SearchItem);