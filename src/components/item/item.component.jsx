import React from 'react';

import WithSpinner from '../with-spinner/with-spinner.component';

import './item.styles.scss';

const Item = ({item}) => {
  const { price, picture, title, condition, sold_quantity, description } = item
  
  return(
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
  )
};

export default WithSpinner(Item);