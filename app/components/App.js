import React from 'react';
import ReactDOM from  'react-dom';
import ButtleNav from './ButtleNav';

class App extends React.Component {
    render() {
        return (

            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <ButtleNav/>
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