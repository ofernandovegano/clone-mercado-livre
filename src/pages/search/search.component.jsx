import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import { apiSearch } from '../../service/api';

import SearchItem from '../../components/search-item/search-item.component'

import './search.styles.scss';

const Search = () => {
  const url = useLocation();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const search = url.search.split("?search=")[1]
    apiSearch.get(`search?q=${search}`).then(response => {
      setItems(response.data.results)
      console.log(response.data.results.slice(0, 4))
    })
  }, [url])

  return(
  <div className="search-page">
    <div className="items">
      {items?.slice(0, 4).map(item => (
        <Link to={`items/${item.id}`}>
          <SearchItem item={item} key={item.id} />
        </Link>
      ))}
    </div>
  </div>
  )
};

export default Search;