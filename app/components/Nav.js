import React from 'react';
import {NavLink} from 'react-router-dom';



class Nav extends React.Component {
    render(){
        return (
            <div>
                <ul className='nav'>
                    <li>
                        <NavLink exact activeClassName='active' to='/'>home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to='/battle'>battle</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to='/popular'>popular</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

module.exports = Nav;