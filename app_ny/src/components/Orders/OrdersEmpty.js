import React from 'react'
import { Link } from 'react-router-dom'
import gogo from '../../assets/img/gogo.jpg'

const OrdersEmpty = () => {
    return (
        <div className="container style404 w-75">
            <h3 className="text-center pb-3 text-black">Your order list appears to be empty!</h3>
            <p className="mb-3 text-center">No worries! Head right over to the <Link to="/products">product</Link> section to start browsing Funko Pops!</p>
            <img src={ gogo } className="imgStyle" alt="gogo"/>
        </div>
    )
}

export default OrdersEmpty
