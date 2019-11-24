import React from 'react'

 function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="/">
                <span style={{color: 'DodgerBlue'}}><i class="fa fa-stack-exchange" aria-hidden="true"></i></span>
                  &nbsp;Star Wars API 
                </a>
            </nav>
        </div>
    )
}

export default Navbar;