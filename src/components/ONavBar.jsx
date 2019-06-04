import React from 'react';
import '../styles/ONavBar.css';
import { MenuIcon, RefreshIcon } from '../Icons/AllIcons';
import SearchForm from './SearchForm';
const ONavBar = () => {
    return (
        <div className='nav-bar-wrapper prism-border'>
            <div className='nav-first-column column'>
                <MenuIcon />
            </div>
            <div className='nav-second-column column'>
                <SearchForm />
            </div>
            <div className='nav-third-column column'>
                <RefreshIcon />
            </div>
        </div>
    );
}

export default ONavBar;