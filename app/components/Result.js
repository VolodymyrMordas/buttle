const React = require('react');
const ReactDOM = require('react-dom');

class Result extends React.Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">array:{this.props.function_name}</div>
                <div className="panel-body">
                    <div className="hint">
                        {this.props.description}
                    </div>
                    <div><b>result:</b> {this.props.result}</div>
                </div>
            </div>
        );
    }
}
export default Result;