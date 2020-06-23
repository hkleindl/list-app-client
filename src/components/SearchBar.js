import React from 'react'

const SearchBar = () => {
    
    return (
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <div class="input-group-append">
                <button class="btn btn-secondary form-control" type="button">
                    <span class="material-icons">search</span>
                </button>
            </div>
        </div>
    )
}

export default SearchBar;
