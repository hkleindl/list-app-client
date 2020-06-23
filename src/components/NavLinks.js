import React from 'react'
import SearchBar from './SearchBar.js'

const NavLinks = () => {
    
    return (
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
            </li>
            <li>
                <SearchBar />
            </li>
        </ul>
    )
}

export default NavLinks;
