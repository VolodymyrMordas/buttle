const React = require('react');
const ReactDOM  = require('react-dom');

require('./index.css');

class App extends React.Comment {
    render (){
        return (
            <div>
                Hello
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);