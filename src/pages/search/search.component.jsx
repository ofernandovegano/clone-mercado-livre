import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { apiBackend } from '../../service/api';

import Items from '../../components/items/items.component'

import './search.styles.scss';

const Search = () => {
  const url = useLocation();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const search = url.search.split("?search=")[1]
    setIsLoading(true);
    try{
      apiBackend.get(`?q=${search}`).then(response => {
        setItems(response.data.items)
        console.log(response.data.items)
      })
    } catch(error) {
      console.log(error);
    }
    setIsLoading(false);
  }, [url])

  return(
  <div className="search-page">
  {console.log(isLoading)}
    <Items isLoading={ isLoading } items={ items } />
  </div>
  )
};

export default Search;