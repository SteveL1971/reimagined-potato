import React from 'react'
import walker from '../assets/img/rv-walker.jpg'

const UserDeleted = () => {
    return (
    <div className="contain maxWidth d-flex margin-auto">
        <div className="container style404 w-75">
            <h2 className="text-center">User deleted!</h2>
            <img src={ walker } className="imgStyle my-3" alt="RV-Walker" />  
        </div>
    </div>
    )
}

export default UserDeleted
