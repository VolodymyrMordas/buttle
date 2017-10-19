import React from 'react';
import ReactDOM from  'react-dom';
import ButtleNav from './ButtleNav';

import Popular from './Popular';
import Home from './Home';
import Language from "./Language";
import App_1 from "./App_1";

const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Switch = ReactRouter.Switch;
const Route = ReactRouter.Route;

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