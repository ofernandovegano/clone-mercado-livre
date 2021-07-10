import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { apiShowItem } from '../../service/api';

import './show.styles.scss';

const Show = () => {
  const params = useParams();
  const [item, setItem] = useState(null);
  const [description, setDescription] = useState("")

  useEffect(()=> {
    apiShowItem.get(params.id).then(response => {
      setItem(response.data)
      console.log(response.data)
    })
    
    apiShowItem.get(`${params.id}/description`).then(response => {
      setDescription(response.data.plain_text)
    })
  },[params.id])



  return(
  <div className="show-page">
    <div className="item">
      <div className="image-description">
        <div className='item-image'
          style={{ backgroundImage: `url(${item?.pictures[0].secure_url})` }}>
        </div>
        <div className="description">
          <h3 className='description-title'>Descripción del producto</h3>
          <p>{description? description : "No hay descripción"}</p>
        </div>
      </div>

      <div className="call-to-action">
        <p>
          {item?.condition === "new" ? "Nuevo" : "Usado"} - {item?.sold_quantity} vendidos
        </p>
        <h2>{item?.title}</h2>
        <div className="price">
          $ {Math.floor(item?.price)}<span>{(item?.price % 1).toFixed(2).substring(2)}</span>
        </div>
        <button>Comprar</button>
      </div>
    </div>
  </div>
  )
};

export default Show;