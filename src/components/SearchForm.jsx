import React from 'react';
import '../styles/SearchForm.css';
import {LookingGlassIcon} from '../Icons/AllIcons';

const SearchForm = () => {
    return ( 
        <div className='search-form-wrapper'>
            <div className='search-first-column'>
                <LookingGlassIcon />
            </div>
            <div className='search-second-column'>
                <label className='label-text text-inner-shadow'>
                Search for processes, digital workers, tags
                </label>
                <input className='search-input'>
                </input>
            </div>

        </div>
     );
}
 
export default SearchForm;