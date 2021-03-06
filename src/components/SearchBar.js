import React from 'react'

const SearchBar = () => {
    
    return (
        <div class="input-group input-group-sm mt-1 ml-2">
            <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <div class="input-group-append input-group-sm">
                <button class="btn btn-secondary form-control" type="button">
                    <span class="material-icons">search</span>
                </button>
            </div>
        </div>
    )
}

export default SearchBar;
