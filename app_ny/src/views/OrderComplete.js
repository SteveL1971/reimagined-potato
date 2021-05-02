import React from 'react'
import { Link } from 'react-router-dom'
import gogo from '../assets/img/gogo.jpg'

const orderComplete = () => {
    return (
    <div>
        <div className="container style404 w-75">
            <h2 className="text-center pb-3">Thank you for your order!</h2>
            <p className="mb-3 text-center">We hope you will be completely satisfied with your purchase! You can see this order, together with all your previous transactions, in the orders section or by clicking <Link to="/orders">here</Link>.</p>
            <img src={ gogo } className="imgStyle" alt="gogo" />
        </div>
    </div>
    )
}

export default orderComplete
