import React from 'react';

class UserItem extends  React.Component{

    render() {
        const {name,email} = this.props
        return(
            <div>
                <h3 className="actual name">{name}</h3>
                <h2 className="naavibes">{email}</h2>
                <hr></hr>
            </div>
        )
         
    }
}




export default UserItem;