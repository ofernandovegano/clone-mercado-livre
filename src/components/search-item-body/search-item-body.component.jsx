import React from 'react';

import shippingIcon from '../../assets/images/ic_shipping@2x.png'

import './search-item-body.styles.scss';

const SearchItemBody = ({item}) => {
  const { price, free_shipping, picture, title, address, condition }= item

  return(
    <div className="item-body">
      <div className="image-price-description">
        <div className='item-image'
          style={{
            backgroundImage: `url(${picture})`
          }}>
        </div>
        <div className="price-description">
          <div className="price">
            <div className='value'>$ {price.amount}</div>
            {
              free_shipping ? 
              (<img className='shipping' src={shippingIcon} alt="this item has shipping" />) 
              : (null)
            }
            
          </div>
          <div className="description">
            {title}
          </div>
          <div className="status">
            {condition}
          </div>
        </div>
      </div>
      <div className="city">
        {address}
      </div>
    </div>
  )
};

export default SearchItemBody;