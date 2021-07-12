import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { apiBackend } from '../../service/api';

import Item from '../../components/item/item.component'

import './show.styles.scss';

const Show = () => {
  const params = useParams();
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(()=> {
    setIsLoading(true);
    apiBackend.get(`/${params.id}`).then(response => {
      setItem(response.data.item)
      console.log(response.data.item)
      setIsLoading(false);
    })
  },[params.id])

  return(
  <div className="show-page">
    <Item isLoading={ isLoading } item={item} />
  </div>
  )
};

export default Show;