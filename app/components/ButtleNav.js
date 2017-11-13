import React from 'react';
import PropTypes from 'prop-types';

import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import {Nav, Navbar, NavItem, FormGroup, FormControl} from 'react-bootstrap/lib';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from './Home';
import Language from './Language';
import Battle from './Battle';

function NavItems(props) {
    const nav = [
        {title: 'Home', isInner: false, to: '/'},
        {
            title: 'Languages', isInner: true, menu: [
            {title: 'All', to: '/languages/all'},
            {title: 'Javascript', to: '/languages/javascript'},
            {title: 'Java', to: '/languages/java'},
            {title: 'Ruby', to: '/languages/ruby'},
            {title: 'CSS', to: '/languages/css'},
            {title: 'Python', to: '/languages/python'}]
        },
        {title: 'Battle', to: '/battle', isInner: false}
    ];
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/languages/:id' component={Language}/>
                    <Route exact path='/battle' component={Battle}/>
                </Switch>
            </BrowserRouter>
            <Nav>
                {nav.map(function (e, idx) {
                    if (e.isInner) {
                        return (
                            <NavDropdown eventKey={idx} title={e.title} id="basic-nav-dropdown" key={idx}>
                                {e.menu.map(function (ee, iidx) {
                                    return <MenuItem href={"#"} eventKey={idx + '-' + iidx} key={idx + '-' + iidx}
                                                     onClick={props.onSelect.bind(null, ee.title)}>{ee.title}</MenuItem>;
                                })}
                            </NavDropdown>
                        )
                    } else {
                        return (
                            <NavItem key={idx} active={e.title === props.selected} to={e.to} onClick={props.onSelect.bind(null, e.title)}>{e.title}</NavItem>
                        )
                    }
                })}
            </Nav>
        </div>
    )
}

NavItems.PropTypes = {
    selected: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default class ButtleNav extends React.Component {

    constructor() {
        super();
        this.state = {
            selected: 'Home',
            onSelect: null
        };

        this.updateNav = this.updateNav.bind(this);
    }

    updateNav(item) {
        this.setState(function () {
            return {
                selected: item
            }
        })
    }

    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">React.js ///</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>

                    <NavItems selected={this.state.selected} onSelect={this.updateNav}/>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Sign In</NavItem>
                        <NavItem eventKey={2} href="#">Sign Up</NavItem>
                    </Nav>
                    <Navbar.Form pullRight>
                        <FormGroup>
                            <FormControl type="text" placeholder="Search"/>
                        </FormGroup>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}