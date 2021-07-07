import React, { useState } from 'react';

import logoMeli from '../../assets/images/Logo_ML.png';

import './header.styles.scss';


const Header = () => {
  const [searchField, setSearchField] = useState('');
  return (
    <div className="header">
      <div className="logo-search">
        <img src={logoMeli} alt="logo do mercado livre" />
        <form className="search-form">
          <input onChange={((e) => setSearchField(e.target.value))} placeholder="Nunca dejes de buscar" />
          <input type='submit' value=''/>
        </form>
      </div>
    </div>
  );
}

export default Header;
