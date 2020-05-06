import React from 'react';

const UserOutput = props => {
    
    const style = {
        "margin-top": "10px"
    }

    return (
        <div style={style}>
            <p>Username: {props.username}</p>
            <p>This is the second paragraph !!!</p>
        </div>
    );
}

export default UserOutput;