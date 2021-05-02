// import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../store/actions/ordersActions';
import { getUserDetails, editUserDetails } from '../../store/actions/authenticate';
import { useParams } from 'react-router-dom';

const AdminOrderHeader = () => {

    const dispatch = useDispatch();
    const id = useParams().id

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useEffect(() => {
      dispatch(getOrders(id));
    }, [dispatch])

    useEffect(() => {
        dispatch(getUserDetails(id));
      }, [dispatch])

    // const loggedInUser = useSelector(state => state.auth.loggedInUser)
    const orders = useSelector(state => state.ordersReducer.orders);
    const userDetails = useSelector(state => state.auth.userDetails);

    // console.log(userDetails)

    const handleSubmit = e => {
        e.preventDefault();
        let fName = userDetails.firstName
        let lName = userDetails.lastName
        let mail = userDetails.email

        if (firstName!=="") fName = firstName
        if (lastName!=="") lName = lastName
        if (email!=="") mail = email

        const user = {
            id: userDetails.userId,
            firstName: fName,
            lastName: lName,
            email: mail,
        }

        dispatch (editUserDetails(user))
    }

    return (
        <div className="textStyle">
            <div className="row gradient-custom3 p-2">
                <h4 className="col-3 headerH4">id:</h4>
                <p className="col-9 headerP"> { id } </p>
                <h4 className="col-3 headerH4">Name:</h4>
                <p className="col-9 headerP"> { userDetails.firstName } { userDetails.lastName }  </p>
                <h4 className="col-3 headerH4">Email:</h4>
                <p className="col-9 headerP"> { userDetails.email }  </p>
                <h4 className="col-3 headerH4">Orders:</h4>
                <p className="col-9 headerP"> { orders.length }  </p>
            </div>
            <form className="card formStyle row" onSubmit={e => handleSubmit(e)}>
                <div className="col p-2 mt-3">
                    <div className="row">
                        <div className="mb-2 col-12 orderP">
                            <input type="text" id="cfirstname" value={firstName} onChange={e => setFirstName(e.target.value)} className="form-control form-control-sm" placeholder={userDetails.firstName}/>
                            <label htmlFor="cfirstname">First name</label>
                        </div>
                        <div className="mb-2 col-12 orderP">
                        <input type="text" id="clastname" value={lastName} onChange={e => setLastName(e.target.value)} className="form-control form-control-sm" placeholder={userDetails.lastName} />
                        <label htmlFor="clastname">Surname</label>
                    </div>
                </div>
                <div className="mb-2 col-12 orderP">
                    <input type="email" id="cemail" value={email} onChange={e => setEmail(e.target.value)} className="form-control form-control-sm" placeholder={userDetails.email} />
                    <label htmlFor="cemail">E-mail</label>
                </div>
            </div>
            <button className="btn btn-secondary w-25">Submit changes</button>
        </form>
        <button className="btn btn-secondary">Edit details</button>
            
        </div>
    )
}

export default AdminOrderHeader
