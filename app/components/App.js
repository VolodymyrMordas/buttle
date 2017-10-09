import React from 'react';
import ReactDOM from  'react-dom';

import Jumbotron from 'react-bootstrap/lib/Jumbotron';
//
// import ArrayMethodsTest from './ArrayMethodsTest';
// import UserRelation from './UserRelation';

import ButtleNav from './ButtleNav';

import Battle from './Buttle';
import Popular from './Popular';
import Home from './Home';
import Nav from './Nav';


//router component
// import {Router, Route} from 'react-router-dom';
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Switch = ReactRouter.Switch;
const Route = ReactRouter.Route;

class App extends React.Component {
    render() {
        const userList = [
            {name:"A A A", isFriend: true},
            {name:"B B B", isFriend: false},
            {name:"C C C", isFriend: false},
            {name:"D D D", isFriend: true},
            {name:"E E E", isFriend: false}];

        return (

            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <ButtleNav/>
                        <Jumbotron>
                            <h1>/// Hello React.js</h1>
                            <p></p>
                            <p>It is maintained by Facebook, Instagram and a community of individual developers and corporations.</p>
                            <p>React allows developers to create large web-applications that use data and can change over time without reloading the page. It aims primarily to provide speed, simplicity, and scalability.</p>
                        </Jumbotron>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <Router>
                                <div className='container'>
                                    <Nav/>
                                    <Route path='/' component={Home} />
                                    <Route path='/battle' component={Battle}/>
                                    <Route path='/popular' component={Popular}/>
                                    <Route render={function () {
                                        return <p>Not Found</p>
                                    }} />
                                </div>
                            </Router>
                        </div>
                    </div>

                    {/*<ArrayMethodsTest />*/}

                    {/*<div className="row">*/}
                        {/*<div className="col-lg-6">*/}
                            {/*<h4>IsNotFriend</h4>*/}
                            {/*<UserRelation list={userList} isFriend={false}/>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-6">*/}
                            {/*<h4>IsFriend</h4>*/}
                            {/*<UserRelation list={userList} isFriend={true}/>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App name="Jordan Walke" familyname="Denis Popov"/>,
    document.getElementById("app")
);