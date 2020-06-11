import React from 'react'
import Logout from "./Logout.js"

const UserMenu = () => {
    
    return (
        <li class="nav-item dropdown navbar-nav">
            <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">User Menu</a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown04">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
            <Logout />
            </div>
        </li>
    )
}

export default UserMenu;
