import React from 'react';
import ReactDOM from  'react-dom';
import ButtleNav from './ButtleNav';

import Home from './Home';
import Language from "./Language";

import Router from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';

class App extends React.Component {
    render() {
        return (

            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <ButtleNav/>
                    </div>

                    <div className="row">
                        <Router>
                            <div>
                                <Route path='/' component={Home} />
                                <Route path='/languages/:id' component={Language}/>
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);