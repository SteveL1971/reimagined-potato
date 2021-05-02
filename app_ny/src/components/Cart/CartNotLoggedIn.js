import React from 'react'
import {Link} from 'react-router-dom';
import gogo from '../../assets/img/gogo.jpg'

const CartNotLoggedIn = () => {
    return (
        <div className="margin-auto">
            <div className="container style404">
                <h1>Please log in!</h1>
                <div className="links d-flex justify-content-center my-2">
                    <p>Already a member? <Link to="/signin">Log in</Link></p>
                    <p>Not a member? <Link to="/signup">Sign up</Link></p>
                </div>
                <img src= { gogo } className="imgStyle" alt="gogo" />
            </div>
        </div>
    )
}

export default CartNotLoggedIn
