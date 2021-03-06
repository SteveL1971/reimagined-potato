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
    const [edit, setEdit] = useState('false');

    useEffect(() => {
      dispatch(getOrders(id));
    }, [dispatch])

    useEffect(() => {
        dispatch(getUserDetails(id));
      }, [dispatch])

    // const loggedInUser = useSelector(state => state.auth.loggedInUser)
    const orders = useSelector(state => state.ordersReducer.orders);
    const userDetails = useSelector(state => state.auth.userDetails);

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
        toggleEdit()
    }

    const toggleEdit = () => {
        setEdit(!edit)
      }

    return (
        <div className="textStyle">
            <div className="row gradient-custom3 p-2">
                <h4 className="col-3 orderH4">id:</h4>
                <p className="col-9 orderP"> { id } </p>
                <h4 className="col-3 orderH4">Name:</h4>
                <p className="col-9 orderP"> { userDetails.firstName } { userDetails.lastName }  </p>
                <h4 className="col-3 orderH4">Email:</h4>
                <p className="col-9 orderP"> { userDetails.email }  </p>
                <h4 className="col-3 orderH4">Orders:</h4>
                <p className="col-9 orderP"> { orders.length }  </p>
                <div className="d-flex justify-content-center">
                <button className={`${edit ? "row": "hideForm"} btn btn-info bg-info mt-3 mb-2 py-1`} onClick={toggleEdit}>Edit details</button>
                </div>
            </div>
            
            <form className={`${!edit ? "row": "hideForm"} card formStyle`} onSubmit={e => handleSubmit(e)}>
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
                <div className="d-flex justify-content-center">
                <button className="btn btn-info bg-info py-1 mb-3">Submit changes</button>
                </div>
            </form>
        </div>
    )
}

export default AdminOrderHeader
