import React from 'react';

import shippingIcon from '../../assets/images/ic_shipping@2x.png'

import './search-item-body.styles.scss';

const SearchItemBody = () => (
    <div className="item-body">
      <div className="image-price-description">
        <div className='item-image'
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1510166218561-8b0b8df7c887?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=511&q=80")`
          }}>
        </div>
        <div className="price-description">
          <div className="price">
            <div className='value'>$1.980</div>
            <img className='shipping' src={shippingIcon} alt="this item has shipping" />
          </div>
          <div className="description">
            Apple Ipod Touch 5g 16gb Negro Igual A Nuevo
          </div>
          <div className="status">
            Completo Unico!
          </div>
        </div>
      </div>
      <div className="city">
        Capital Federal
      </div>
    </div>
);

export default SearchItemBody;