import React, { useState } from 'react';

import logoMeli from '../../assets/images/Logo_ML.png';
import searchIcon from '../../assets/images/ic_Search@2x.png'

import './header.styles.scss';


const Header = () => {
  const [searchField, setSearchField] = useState('');
  return (
    <div className="header">
      <div className="logo-search">
        <img className='logo' src={logoMeli} alt="logo do mercado livre" />
        <form className="search-form">
          <div className="search-box">
            <input onChange={((e) => setSearchField(e.target.value))} placeholder="Nunca dejes de buscar" name="q" />
            <button className='submit-button' type='submit'>
              <img className='search-icon' src={searchIcon} alt="search icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Header;
