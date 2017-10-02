const React = require('react');
const ReactDOM  = require('react-dom');

require('./index.css');

class App extends React.Component {
    render (){
        return (
            <div>
                Hello world, {this.props.name} {this.props.familyname}
            </div>
        );
    }
}

ReactDOM.render(
    <App name="vitaly" familyname="telychko" />,
    document.getElementById("app")
);