import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { apiBackend } from '../../service/api';

import './show.styles.scss';

const Show = () => {
  const params = useParams();
  const [item, setItem] = useState([]);

  useEffect(()=> {
    apiBackend.get(`/${params.id}`).then(response => {
      setItem(response.data.item)
      console.log(response.data.item)
    })
  },[params.id])

  const { price, picture, title, condition, sold_quantity, description } = item
  
  return(
  <div className="show-page">
    <div className="item">
      <div className="image-description">
        <div className='item-image'
          style={{ backgroundImage: `url(${picture?.secure_url})` }}>
        </div>
        <div className="description">
          <h3 className='description-title'>Descripción del producto</h3>
          <p>{description? description : "No hay descripción"}</p>
        </div>
      </div>

      <div className="call-to-action">
        <p>
          {condition === "new" ? "Nuevo" : "Usado"} - {sold_quantity} vendidos
        </p>
        <h2>{title}</h2>
        <div className="price">
          $ {price?.amount}<span>{price?.decimals}</span>
        </div>
        <button>Comprar</button>
      </div>
    </div>
  </div>
  )
};

export default Show;