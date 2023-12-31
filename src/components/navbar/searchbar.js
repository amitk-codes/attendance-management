import React from 'react';
import SearchIcon from "../../assets/icons/search_icon.svg"

export const Searchbar = () => {
  return(
    <div className='nav-searchbar-div'>
      <input placeholder='Search' />
      <img className='nav-searchbar-icon' src={SearchIcon} />
    </div>
  )
}