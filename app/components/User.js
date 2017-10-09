import React from 'react';

class User extends React.Component {
    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">{this.props.user.name}</div>
                <div className="panel-body">
                    UserName : {this.props.user.name}<br />
                    isFriend : {this.props.user.isFriend ? "true" : "false"}
                </div>
            </div>
        );
    }
}

export default User;