import React from 'react'
import buffy from '../../assets/img/buffy-bloody.jpeg'
import { Link } from 'react-router-dom'

const OrdersNotLoggedIn = () => {
    return (
        <div v-if="!loggedIn">
            <div className="container style404">
            <h1>Please log in!</h1>
            <div className="links d-flex justify-content-center my-2">
                <p>Already a member? <Link to="/signin">Log in</Link></p>
                <p>Not a member? <Link to="/signup">Sign up</Link></p>
            </div>
            <img src={ buffy } className="imgStyle" alt="Buffy" />
            </div>
        </div>
    )
}

export default OrdersNotLoggedIn
