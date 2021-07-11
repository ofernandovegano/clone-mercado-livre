import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import { apiBackend } from '../../service/api';

import SearchItem from '../../components/search-item/search-item.component'

import './search.styles.scss';

const Search = () => {
  const url = useLocation();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const search = url.search.split("?search=")[1]
    try{
      apiBackend.get(`?q=${search}`).then(response => {
        setItems(response.data.items)
        console.log(response.data.items)
      })
    } catch(error) {
      console.log(error);
    }
  }, [url])

  return(
  <div className="search-page">
    <div className="items">
      {items?.map(item => (
        <Link to={`items/${item.id}`} key={item.id} >
          <SearchItem item={item} />
        </Link>
      ))}
    </div>
  </div>
  )
};

export default Search;