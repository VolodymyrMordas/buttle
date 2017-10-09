import React from 'react';
import User from './User';

class UserRelation extends React.Component {
    render() {
        const isFriend = this.props.isFriend;
        return (
            <div>
                {this.props.list.filter(function (currentUser) {
                    return currentUser.isFriend === isFriend;
                }).map(function (u, idx) {
                    return <User user={u} key={idx} />
                })}
            </div>
        )
    }
}

export default UserRelation;