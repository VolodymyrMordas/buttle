import React from 'react';

import Jumbotron from 'react-bootstrap/lib/Jumbotron';

class Home extends React.Component {
    render(){
        return (
            <Jumbotron>
                <h1>/// Hello React.js</h1>
                <p></p>
                <p>It is maintained by Facebook, Instagram and a community of individual developers and corporations.</p>
                <p>React allows developers to create large web-applications that use data and can change over time without reloading the page. It aims primarily to provide speed, simplicity, and scalability.</p>
            </Jumbotron>
        )
    }
}

module.exports = Home;