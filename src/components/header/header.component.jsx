import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import logoMeli from '../../assets/images/Logo_ML.png';
import searchIcon from '../../assets/images/ic_Search@2x.png'

import './header.styles.scss';


const Header = () => {
  const history = useHistory();
  const [searchField, setSearchField] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault()
    const query = searchField
    history.push({pathname: '/items', search: `?search=${query}`})
  }
  
  return (
    <div className="header">
      <div className="logo-search">
        <Link to="/">
          <img className='logo' src={logoMeli} alt="logo do mercado livre" />
        </Link>
        <form className="search-form" onSubmit={event => handleSubmit(event)}>
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
