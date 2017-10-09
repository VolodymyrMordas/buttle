const React = require('react');
const ReactDOM = require('react-dom');

class Panel extends React.Component {
    render() {
        return (
            <div class="panel panel-default">
                <div class="panel-heading">{this.props.header}</div>
                <div class="panel-body">
                    <React/>
                </div>
            </div>
        );
    }
}