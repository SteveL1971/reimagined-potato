import React from 'react'
import { Link } from 'react-router-dom'
import gogo from '../../assets/img/gogo.jpg'

const CartEmpty = () => {
    return (
        <div className="container style404 w-75">
            <h2 className="text-center pb-3">Your shopping basket appears to be empty!</h2>
            <p className="mb-3 text-center">No worries! Head right over to the <Link to="/products">product</Link> section to start browsing Funko Pops!</p>
            <img src={ gogo } className="imgStyle" alt="gogo"/>
        </div>
    )
}

export default CartEmpty
