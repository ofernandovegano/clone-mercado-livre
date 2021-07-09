import React from 'react';

import shippingIcon from '../../assets/images/ic_shipping@2x.png'

import './search-item-body.styles.scss';

const SearchItemBody = ({item}) => {
  const { price, accepts_mercadopago: acceptsMercadopago, thumbnail_id: imageID, title, address } = item

  return(
    <div className="item-body">
      <div className="image-price-description">
        <div className='item-image'
          style={{
            backgroundImage: `url("https://http2.mlstatic.com/D_NQ_NP_${imageID}-O.webp")`
          }}>
        </div>
        <div className="price-description">
          <div className="price">
            <div className='value'>$ {price}</div>
            {
              acceptsMercadopago ? 
              (<img className='shipping' src={shippingIcon} alt="this item has shipping" />) 
              : (null)
            }
            
          </div>
          <div className="description">
            {title}
          </div>
          <div className="status">
            Completo Unico!
          </div>
        </div>
      </div>
      <div className="city">
        {address.state_name}
      </div>
    </div>
  )
};

export default SearchItemBody;