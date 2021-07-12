import React from 'react';
import { Link } from 'react-router-dom';

import WithSpinner from '../with-spinner/with-spinner.component';
import SearchItem from '../search-item/search-item.component'

import './items.styles.scss';

const Items = ({items}) => {

  return(
    <div className="items">
      {items?.map(item => (
        <Link to={`items/${item.id}`} key={item.id} >
          <SearchItem item={item} />
        </Link>
      ))}
    </div>
  )
};

export default WithSpinner(Items);