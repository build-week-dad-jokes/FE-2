import React from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'semantic-ui-react'

const Navigation = () => {
    return (
        <nav>
            <header>
                <Link className="navlink" to='/dadjokes'>Dad Jokes</Link>
                <input type='search' placeholder="search jokes"/>
                <Link to='/addjoke'>+ joke</Link>
                <Link className="signin_button" to="/signin">sign in</Link>
            </header>
        </nav>
    )
}
export default Navigation