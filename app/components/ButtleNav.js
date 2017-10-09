import React from 'react';
import PropTypes from 'prop-types';

import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';

function NavItems(props){
    const nav = [
        {title: 'Home', isInner: false, to:'/'},
        {title: 'Lessons', isInner: true, menu:[
            {title : 'lesson 1', to:'/lesson_1'},{title:'lesson 2', to:'/lesson_2'},{title:'lesson 3', to:'/lesson_3'}
        ]},
        {title: 'Some', to:'/some'}
    ];
    return (
        <Nav>
            {nav.map(function(e, idx){
                if(e.isInner){
                    return (
                        <NavDropdown eventKey={idx} title={e.title} id="basic-nav-dropdown">
                            {e.menu.map(function(ee, iidx){
                                return <MenuItem href={ee.to} eventKey={idx + '-' + iidx} key={idx + '-' + iidx}>{ee.title}</MenuItem>;
                            })}
                        </NavDropdown>
                    )
                } else {
                    return (<NavItem
                        active={props.selected === e.title}
                        onClick={props.onSelect.bind(null, e)}
                        eventKey={idx}
                        href={e.to}
                        key={idx}>{e.title}</NavItem>)
                }
            })}
        </Nav>
    )
}

NavItems.PropTypes = {
    selected: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
};

class ButtleNav extends React.Component {

    constructor(){
        super();
        this.state = {
            selected : 'Home'
        };

        this.updateNav = this.updateNav.bind(this);
    }

    updateNav(item){
        this.setState(function(){
           return {
               selected : item
           }
        })
    }

    render() {

        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">React.js ///</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <NavItems selected={this.state.selected} onSelect={this.updateNav}/>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Sign In</NavItem>
                        <NavItem eventKey={2} href="#">Sign Up</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default ButtleNav;